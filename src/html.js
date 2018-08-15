import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css, gptScript, gptLoad, gptInit, cookieconsentStyle, cookieconsentScript, cookieconsentLoad
    if (process.env.NODE_ENV === `production`) {
      // Can't use React.Fragment yet, Gatsby V2 / Babel 7 only
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      )
      gptScript = (
        <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'>
        </script>
      )
      gptLoad = (
        <script dangerouslySetInnerHTML={{__html: `var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];`}}>
        </script>
      )
      gptInit = (
        <script dangerouslySetInnerHTML={{__html: `var gptAdSlots = [];
googletag.cmd.push(function() {
  var topBotMapping = googletag.sizeMapping()
    .addSize([141, 125], [125, 125])
    .addSize([196, 150], [[180, 150], [125, 125]])
    .addSize([216, 200], [[200, 200], [180, 150], [125, 125]])
    .addSize([250, 200], [[200, 200], [180, 150], [125, 125], [234, 60]])
    .addSize([256, 200], [[200, 200], [240, 133], [180, 150], [125, 125], [234, 60]])
    .addSize([266, 250], [[250, 250], [200, 200], [240, 133], [180, 150], [125, 125], [234, 60]])
    .addSize([316, 200], [[200, 200], [240, 133], [300, 100], [180, 150], [300, 75], [125, 125], [234, 60]])
    .addSize([316, 250], [[300, 250], [250, 250], [200, 200], [240, 133], [300, 100], [180, 150], [300, 75], [125, 125], [234, 60]])
    .addSize([336, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([336, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([352, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([352, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([352, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([484, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([484, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([484, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([496, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([496, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([496, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([496, 320], [[480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([596, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([596, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([596, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([596, 320], [[480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([596, 400], [[580, 400], [480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
    .addSize([744, 200], [[728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
    .addSize([766, 200], [[750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
    .addSize([966, 200], [[950, 90], [750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
    .addSize([976, 200], [[960, 90], [950, 90], [750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
    .addSize([986, 200], [[970, 90], [960, 90], [950, 90], [750, 100], [728, 90], [970, 66], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
    .addSize([996, 200], [[980, 120], [980, 90], [970, 90], [960, 90], [950, 90], [750, 100], [728, 90], [970, 66], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]]);

  var sideMapping = googletag.sizeMapping()
    .addSize([0, 0], [])
    .addSize([1552, 616], [[120, 600], [120, 240]])
    .addSize([1562, 616], [[120, 600], [120, 240], [125, 125]])
    .addSize([1632, 616], [[160, 600], [120, 600], [120, 240], [125, 125]])
    .addSize([1712, 616], [[160, 600], [200, 446], [120, 600], [200, 200], [120, 240], [125, 125]])
    .addSize([1792, 616], [[240, 400], [160, 600], [200, 446], [120, 600], [200, 200], [120, 240], [125, 125]])
    .addSize([1812, 616], [[240, 400], [160, 600], [250, 360], [200, 446], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
    .addSize([1912, 616], [[300, 600], [160, 600], [240, 400], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
    .addSize([1912, 1066], [[300, 1050], [300, 600], [240, 400], [160, 600], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
    .addSize([1952, 616], [[300, 600], [320, 480], [240, 400], [160, 600], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
    .addSize([1952, 1066], [[300, 1050], [300, 600], [320, 480], [240, 400], [160, 600], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]]);

  gptAdSlots[0] = googletag
    .defineSlot('/21735668613/bfa-hd_top', [728, 90], 'div-gpt-ad-1534303848220-0')
    .defineSizeMapping(topBotMapping.build())
    .addService(googletag.pubads());

  gptAdSlots[1] = googletag
    .defineSlot('/21735668613/bfa-hd_side', [120, 600], 'div-gpt-ad-1534304579228-0')
    .defineSizeMapping(sideMapping.build())
    .addService(googletag.pubads());

   gptAdSlots[2] = googletag
    .defineSlot('/21735668613/bfa-hd_bot', [728, 90], 'div-gpt-ad-1534304680941-0')
    .defineSizeMapping(topBotMapping.build())
    .addService(googletag.pubads());

  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().disableInitialLoad();
  googletag.enableServices();
});`}}>
        </script>
      )
      cookieconsentStyle = (
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.css"/>
      )
      cookieconsentScript = (
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"/>
      )
      cookieconsentLoad = (
        <script dangerouslySetInnerHTML={{__html: `window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#424242",
        "text": "#ffffff"
      },
      "button": {
        "background": "#b71c1c",
        "text": "#ffffff"
      }
    },
    "theme": "classic"
  })
});`}}>
        </script>
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          {gptScript}
          {gptLoad}
          {gptInit}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          {cookieconsentStyle}
          {cookieconsentScript}
          {cookieconsentLoad}
          <script dangerouslySetInnerHTML={{__html: `var whTooltips = {colorLinks: true, iconizeLinks: true, iconSize: true};`}}>
          </script>
          <script src="https://wow.zamimg.com/widgets/power.js">
          </script>
        </body>
      </html>
    )
  }
}
