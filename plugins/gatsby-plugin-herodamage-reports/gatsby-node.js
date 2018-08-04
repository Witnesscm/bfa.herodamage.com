const fs = require('fs').promises
const path = require('path')

const wowClasses = {}

module.exports.onCreateNode = async function ({node, getNode, boundActionCreators}) {
  const {createNodeField} = boundActionCreators

  // Prevents non reports files & reports directories to be processed
  if (node.sourceInstanceName !== 'reports' || node.internal.type !== 'File') return

  // Example file: 'reports/Death-Knight_Trinkets_1T_T21_Frost_Cold-Heart-Runic-Attenuation.json'
  const name = node.name // 'Death-Knight_Trinkets_1T_T21_Frost_Cold-Heart-Runic-Attenuation'
  const nameParts = name.toLowerCase().split('_') // ['death-knight', 'trinkets', '1t', 't21', 'frost', 'cold-heart-runic-attenuation']
  const [wowClass, simulationType, fightStyle, tier, spec, variation] = nameParts
  const slug = `/${wowClass}/${simulationType}/${nameParts.slice(2).join('-')}`
  // slug: '/death-knight/trinkets/1t-t21-frost-cold-heart-runic-attenuation'
  createNodeField({node, name: 'slug', value: slug})
  // name: 'Death-Knight_Trinkets_1T_T21_Frost_Cold-Heart-Runic-Attenuation'
  createNodeField({node, name: 'name', value: name})
  // wowClass: 'death-knight'
  createNodeField({node, name: 'wowClass', value: wowClass})
  // simulationType: 'trinkets'
  createNodeField({node, name: 'simulationType', value: simulationType})
  // fightStyle: '1t'
  createNodeField({node, name: 'fightStyle', value: fightStyle})
  // tier: 't21'
  createNodeField({node, name: 'tier', value: tier})
  // spec: 'frost'
  createNodeField({node, name: 'spec', value: spec})
  // variation: 'cold-heart-runic-attenuation' (optional, if it doesn't exist then it's an empty string '')
  createNodeField({node, name: 'variation', value: variation || ''})

  // Get the metas from the file
  const json = JSON.parse(await fs.readFile(node.absolutePath, {encoding: 'utf8', flag: 'r'})).metas
  const optionsDbc = json['options']['dbc']
  const versionUsed = optionsDbc[optionsDbc['version_used']]
  createNodeField({node, name: 'version', value: versionUsed['wow_version']})
  createNodeField({node, name: 'build', value: versionUsed['build_level']})
  createNodeField({node, name: 'targetError', value: json['options']['target_error']})
  createNodeField({node, name: 'buildTime', value: json['build_timestamp']})
  createNodeField({node, name: 'resultTime', value: json['result_timestamp']})

  // Register the wow class to create the corresponding index page if it's the first time we meet it
  if (!wowClasses[wowClass]) wowClasses[wowClass] = true
}

module.exports.createPages = async function ({graphql, boundActionCreators}) {
  const {createPage} = boundActionCreators

  // Make the class index pages by iterating over discovered classes during onCreateNode
  Object.keys(wowClasses).forEach((wowClass) => {
    createPage({
      path: `/${wowClass}/`,
      component: path.resolve('./src/templates/wow-class.jsx'),
      context: {
        wowClass: wowClass
      }
    })
  })

  // Makes the simulations pages
  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {eq: "reports"}}) {
        edges {
          node {
            fields {
              slug
              name
              wowClass
              simulationType
              fightStyle
              tier
              spec
              variation
              version
              build
              targetError
              buildTime
              resultTime
            }
          }
        }
      }
    }
  `)
  const {allFile} = result.data
  if (allFile) {
    allFile.edges.forEach(({node}) => {
      const fields = node.fields
      createPage({
        path: fields.slug,
        component: path.resolve(`./src/templates/simulation/${fields.simulationType}.jsx`),
        context: fields
      })
    })
  }
}