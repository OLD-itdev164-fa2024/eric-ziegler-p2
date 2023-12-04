# One Six Four, Adventure!
An old-school style texted based adventure game with map images.  
Eric Ziegler, ITDEV164 Project 2  

This is a bit of a kludge to force a game structure into the Contentful CMS, I just didn't want to make a blog/article type site despite it seeming like that's what Contentful is designed to be. My off the cuff placeholder articles in the weekly activities put this idea in my head and I just couldn't shake it. I think I learn more sometimes by making things do other than the intended.  
Obviously this "game" can be broken or cheated very easily, but making a robust game wasn't the point.

### Features / Requirements / Tasks
These were admittedly somewhat iterative and retroactively developed, as I did not really have a grasp on what I could accomplish until I started doing some preliminary tests and building out a little at a time.
- A world made up of tiles, displayed one per page, cross-linked with navigation.
- Health Points tracked across pages with death/failure checks.
- Encounters (enemy/item) with variable effects to HP.
    - Should only occur upon first visit to a tile.
- ~~Page theme according to world environment.~~ Unsolved.
- ~~Equipment for the player to use/carry.~~ Too ambitious.

The world is constructed of GameTile content type objects on the CMS. They contain the map image, flavor text, and importantly four reference fields to potential adjacent GameTiles, as well as a GameEncounter content object reference. Each tile also holds a "connection hint" which is a short descriptive text queried to dress up the links for traveling between tiles.

The GameEncounter holds whether it heals or harms the player and by how much, as well as obvious flavor text to describe what is happening to the player.

Browser session storage is used to track health points as well as visited map tiles for encounter handling.

### Notes, Thoughts, Reflections
I tried a few ways to set up the TravelLink system to detect potential links and which direction to label them. Since the only indication of which direction a link is for is the name of the field returned in the graphql query it seemed there was no clean way to determine this automatically. I can't check the name of the field itself, and the object inside it doesn't know because it could be linked from any direction. In the end a few conditionals handled very directly felt the cleanest as any other attempt just shunted the conditionals to different areas of the code for no advantage.  
I don't believe there would be a way to deal with it on the CMS end since the fields polled are references and could not have an identifying parameter that isn't part of the underlying referenced object.

It took me several hours and half a dozen articles to figure out how to implement the React context provider through gatsby-browser to track a value across pages. I got it working (technically) but ran into issues with updating it how I wanted. I determined it wasn't really suited for my needs and scrapped the work, replacing it with session storage. But at least I learned something in the process, even if I lost a few seconds off my lifespan from the stress and confusion.
These two articles were the most helpful. The first for the majority of it, the second for being the only one I could find that clued me in on how to pass a value into the context and not just trigger a function internal to it.  
https://www.digitalocean.com/community/tutorials/gatsbyjs-state-management-in-gatsby  
https://dhanrajsp.me/snippets/sharing-state-in-gatsby