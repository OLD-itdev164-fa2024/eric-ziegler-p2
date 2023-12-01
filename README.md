# eric-ziegler project 2

Map tiles cross-linked with navigation
HP tracking across pages - death checks
Encounters (enemy/item) with variable effects


It took me several hours and half a dozen articles to figure out how to implement the React context provider through gatsby-browser to track a value across pages. I got it working (technically) but ran into issues with updating it how I wanted. I determined it wasn't really suited for my needs and scrapped the work, replacing it with session storage. But at least I learned something in the process, even if I lost a few seconds off my lifespan from the stress and confusion.
These two articles were the most helpful. The first for the majority of it, the second for being the only one I could find that clued me in on how to pass a value into the context and not just trigger a function internal to it.
https://www.digitalocean.com/community/tutorials/gatsbyjs-state-management-in-gatsby
https://dhanrajsp.me/snippets/sharing-state-in-gatsby