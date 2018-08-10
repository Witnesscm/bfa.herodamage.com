webpackJsonp([87192162464282],{405:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=l(3),r=a(n),i=l(4),o=a(i),u=l(95),s=a(u),h=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(s.default,{title:"FAQ | "+t.site.siteMetadata.title}),r.default.createElement("h1",null,"Frequently Asked Questions"),r.default.createElement("section",null,r.default.createElement("h2",null,"General"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("h3",null,"What is the purpose of this website?"),r.default.createElement("p",null,"We aim to provide a centralized base of Theorycrafting and SimulationCraft results for all World of Warcraft classes.",r.default.createElement("br",null),"Our goal is to make all the information you need to optimize your character accessible on a clear and simple website.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Who is it intended for?"),r.default.createElement("p",null,"Everyone who wants to learn more about the optimization and possibilities of their characters. With the results we want to give an overview how different builds compare in different situations, what you can do to improve your gear and what options may be interesting to you.")),r.default.createElement("li",null,r.default.createElement("h3",null,"How are these results generated?"),r.default.createElement("p",null,"These results are generated using the ",r.default.createElement("a",{href:"http://www.simulationcraft.org/",title:"SimulationCraft Website",target:"_blank",rel:"nofollow"},"SimulationCraft")," software, our ",r.default.createElement("a",{href:"https://github.com/Ravenholdt-TC/SimcScripts",title:"Ruby scripts we use to generate datas",target:"_blank",rel:"nofollow"},"Ruby scripts"),", and several simulation profiles to obtain an overview on multiple aspects of a specialization.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Where can I find the SimC profiles that are used for the website?"),r.default.createElement("p",null,"We are almost always using SimulationCraft default profiles with our scripts changing things as necessary for each setup. If you are interested in the details behind the scenes, you can check out our base profiles ",r.default.createElement("a",{href:"https://github.com/Ravenholdt-TC/SimcScripts/tree/master/profiles",title:"Profiles used to generate datas",target:"_blank",rel:"nofollow"},"here"),".")))),r.default.createElement("section",null,r.default.createElement("h2",null,"Combinations"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("h3",null,"How do the combination filters work?"),r.default.createElement("p",null,'For the talent filter you can specify a template for the talent string with the numbers 1-3 for the left/middle/right talent of each tier and an x (or *) as a wildcard. For example, entering "xx1xx3x" will show only setups with the first talent in the third row and the third talent in the sixth row.',r.default.createElement("br",null),"The set and legendary filters allow you to select only what you have available to exclude results you are not interested in.")),r.default.createElement("li",null,r.default.createElement("h3",null,"What Raid difficulty are the combinations based on?"),r.default.createElement("p",null,"If not specified otherwise, our profiles use unforged Mythic Raid gear. Heroic profiles are marked as such.")),r.default.createElement("li",null,r.default.createElement("h3",null,"How can I see the gear of a specific combination simulation?"),r.default.createElement("p",null,"It's not possible to see the details yet but we are working on it!")),r.default.createElement("li",null,r.default.createElement("h3",null,"What T2 traits of the Netherlight Crucible do the Crucible ring simulations use?"),r.default.createElement("p",null,"The profiles of each specialization always use three of what we know to be the best possible tier two trait for it. This means that the Crucible ring will likely have the best impact and if you have different tier two traits, you should run a simulation for your own character.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Can I compare my character to the combinations?"),r.default.createElement("p",null,"Your character has different gear than the Combinator profile (Mythic+, Warforged / Titanforged, etc. can lead to very noticeable differences). We usually only simulate unforged gear for each Tier and difficulty. It's highly advisable to sim your own character in order to find the best possible setup.")),r.default.createElement("li",null,r.default.createElement("h3",null,"But if I have to sim my character anyway, what are the combinations for?"),r.default.createElement("p",null,"The main goal of combination sims is to find and highlight outliers and also to get a general idea promising setups. Based on the combinations, you can narrow down what builds you would like to investigate for your own character. Even if the combinations use different gear than you, the best combination usually gets you on the right track!")),r.default.createElement("li",null,r.default.createElement("h3",null,"Do the combinations represent actual raid conditions?"),r.default.createElement("p",null,"Not really, at this moment. If not specified otherwise, we usually have single target patchwerk simulations without other players or mechanics.",r.default.createElement("br",null),"Also, the 100%-90% phase as well as the execute phase of the boss might be shorter or longer in a simulation, making some legendaries like Cinidaria or talents that work well at certain HP thresholds valued differently.",r.default.createElement("br",null),"There is no ideal solution to this. It depends highly on your group.")))),r.default.createElement("section",null,r.default.createElement("h2",null,"Relics"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("h3",null,"How to read the relics graph?"),r.default.createElement("p",null,"If you compare a trait to the weapon item level on the first line, you can see how many item levels the trait is worth. By hovering over it, you can check out the exact DPS increase.")))),r.default.createElement("section",null,r.default.createElement("h2",null,"Trinkets"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("h3",null,"How are the trinket simulations generated?"),r.default.createElement("p",null,"Only one trinket is simulated at multiple item levels for the given base profile. Hence, the impact of two strong trinkets working very well together may not be taken into account. We want to add an option for that in the future.")),r.default.createElement("li",null,r.default.createElement("h3",null,"Is empowerment mechanic for the Pantheon trinkets included?"),r.default.createElement("p",null,'If a Pantheon trinket has a "X-Pantheon" suffix, it means that the simulation assumed X other players with the trinket in your raid. Without that suffix, only the baseline proc has been considered.')))))};h.propTypes={data:o.default.object},t.default=h;t.query="** extracted graphql fragment **"}});