# changelog

### Saturday, 14/05/2016 - v2.0.0 (finally!)

I've been working on v2 for a *very* long time. I want to thank you guys for being paitent.
It started rather small, but as more and more features were added, I decided to just wait until everything was polished.

Massive changelog incoming:

#### Brews
- New flow for creating new brews. Before creating a new brew would immedaitely create a brew in the database and let you edit it. Many people would create a new brew just to experiment and close it, which lead to many "abandoned brews" (see the Under the hood section below). This started eating up a ton of database space. You now have to manually save a new brew for the first time, however Homebrewery will store anything you don't have saved in local storage, just in case your browser crashes or whatever, it will load that up when you go back to `/homebrew/new`
- Black blocking edges around notes and stat blocks when printing to PDFs have been fixed
- Borders sometimes not showing up in the second column have been fixed
- All pseudo-element borders have been replaced with reliable border images.
- Chrome can finally print to PDF as good as Chrome Canary! Updating instructions.
- Added a little page number box.
- Added in a new editable Brew Title. This will be shown in the navbar on share pages, and will default to the file name when you save as PDF. All exsisting brews will be defaulted with an empty title.
- Mutliline lists render better now
- Firefox rendering has been slithgly improved. Firefox and Chrome render things **slightly** differently, over the course of a brew, these little changes add up and lead to very noticable rendering differences between the browsers. I'm trying my best to get Firefox rendering better, but it's a difficult problem.
- A bunch of you have wanted to donate to me. I am super flattered by that. I created a [patreon page](https://www.patreon.com/stolksdorf). If you feel like helping out, head here :)

#### Under the Hood Stuff
- Setup a proper staging environment. Will be using this for tests, and hopefully getting the community to help me test future versions
- Server-side prerendering now much faster
- Regular weekly database back-ups. Your brews are safe!
- Database is now uniquely indexed on both editId and shareId, page loads/saving should be much faster
- Improved Admin console. This helps me answer people's questions about issues with their brews
- Added a whole querying/pagniation API that I can use for stats and answering questions
- Clearing out "Abandoned" brews (smaller than a tweet and haven't been viewed for a week). These account for nearly a third of all stored brews.

#### Interface
- Added in a whole new editor with syntax highlighting for markdown
- Built a splitpane! Remembers where you left the split in between sessions
- Re-organized the snippets into a hierarchical groups. Should be much easier to find what you need
- Partial page rendering is working. The Homebrewery will now only load the viewable pages, and any page with `<style>` tags on them. If you are working on a large brew you should notice *significant* performance improvements
- Edit page saving interface has been improved significantly. Auto-saves after 3 seconds on inactivity, now allows user to save at anytime. Will stop the tab from closing witha  pop-up if there are unsaved changes.
- Navbar and overall style has been improved and spacing made more consistent
- Elements under the hood are way more organized and should behaviour much more reliably in many sizes.
- Source now opens to it's own route `/source/:sharedId` instead of just a window. Now easier to share, and won't be blocked by some browsers.
- Print page now auto-opens print dialog. If you want to share your print page link, just remove the `?dialog=true` parameter and it won't open the dialog.



\page

### Wednesday, 20/04/2016
- A lot of admin improvements. Pagninated brew table
- Added a searching and removing abandoned brew api endpoints (turns out about 40% of brews are shorter that a tweet!).
- Fixed the require cache being cleared. Pages should render a bit faster now.
- Pulled in `kkragenbrink`s fix for nested lists, Thanks!


### Wednesday, 06/04/2016 - v1.4
* Pages will now partially render. This should greatly speed up *very* large homebrews. The Homebreery will figure out which page you should be looking at and render that page, the page before, and the page after.
* Zooming should be fixed. I've changed the font size units to be cm, which match the units of the page. Zooming in and out now look much better.


### Monday, 29/02/2016 - v1.3.1
* Removng the changelog button from the Share page
* Added a A4 page size snippet (thanks 	guppy42!)
* Added support for `<sup>` and `<sub>` tags (thanks crashinworld14!)

### Saturday, 20/02/2016
* Fixed h1 headers not going full width (thanks McToomin27)
* Added a github issue template

## v1.3.0

### Friday, 19/02/2016
* Improved the admin panel
* Added ability to clear away old empty brews
* Added delete button to the edit page
* Added a dynamically updating changelog page! Nifty!
* Added stlying for wide monster stat blocks and single column class tables
* Added snippets for wide monster stat blocks and single column class tables

### Tuesday, 16/02/2016
* Paragraphs right after tables now indent (thanks LikeAJi6!)
* Added a `@page` css rule to auto turn off margins when printing
* Added a `page-break` property on each `.phb` page to properly page the pages up when exporting (thanks Jokefury!)
* Improved first character rendering on Firefox
* Improved table spacing a bit
* Changed padding at page bottom for better fit and clipping of elements
* Improved spacing for bold text (thanks nickpunt!)


## v1.2.0

### Sunday, 17/01/2016
* Added a printer friendly snippet that injects some CSS to remove backbrounds and images
* Adjusted the styling specific to spell blocks to give it tighter spacing
* Added a changelog! How meta!

## v1.1.0

### Thursday, 14/01/2016
* Added view source to see the markdown that made the page
* Added print view
* Fixed API issues that were causing the server to crash
* Increased padding on table cells
* Raw html now shows in view source


## v1.0.0 - Release

### Wednesday, 3/01/2016

* Added `phb.standalone.css` plus a build system for creating it
* Added page numbers and footer text
* Page accent now flips each page
