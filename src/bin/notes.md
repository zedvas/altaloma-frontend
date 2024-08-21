alta-loma project log

legend:
= timestamps

- achievements or log of activity
  ? questions to follow up
  [] short term pending tasks
  /? answered questions

=== 12.01.24 - st 1.5hours ===

- set up react file and ran into a few issues with structure and runnign into node errors
- linked google fonts to react components (through import straight into CSS file- can this be done any other way? Should/can it ever be imported into the components or HTML)
- linked materialUI icons and used them in project.
- Used CSS variables. They've been placed into the index.css but is there a better way fro this?
- Keeping more structired with conscious use of 'wrapper' and 'container'
- Tried to startoff with styled components but was running into issues so decided on sticking to 1 CSS sheet per component for now.
  ? Having an issue trying to directly alter the stylign of a material UI icon in the CSS stylesheet (changing font-size). Work on underdtanding how to do this.
- changed approach from batch HTML, batch CSS, batch React etc to doing one component through to completion. I'm finding the CSS doesn't feel overwhelming this way and in having only short spurts of CSS and little wins along the way, I',m building up the motivation to continue. To see a whole part of the page be "done" instead of having a whole page partially done feels better and more accomplished. Has such a big part of my setback been becuase of ADHD 'batch-processing' approach?

=== 12.01.24 - st 1.5hours ===

- made navbar responsive on change of screen size
- added some jsx to toggle a useState hook on click of hamburger
  ? added in keyframe animation so hamburger menu fades in. How do I do the same on fade out?

short term to do:

[?] create fade out of mobile menu -- DONE FROM STACK BUT UNDERSTAND HOW
[] create animation for hamburger to turn into 'x' when active
[] bring up instagram icon at the bottom of mobile menu

[] reinforce:
. create react app
. linking google mfonts
. linking material UI
. CSS variables
. alter CSS of material UI icons (?)
. media query/responsive
. keyframe animations
. jsx in react
. using state hooks
. how to update class list using hooks
. nth child

? find out why materialUI icons have to have 'class' instead of 'className'

/?done --unrelated-- set up SSH key for githib

=== 18.01.2023 - 3 hours ===

- succesfully conected local machine to github (finally yay!) and ran tests to ensure all okay
- some project files were lost in process so redid and fixed what needed to be amended
- started hero section

? how to use css modules so the style sheets don't overwrite each other or spread to unintended areas of th app
? understand parent and child heights and widths - change hero class anmes once this is fixed.
[?] image not displaying in hero

[] create animated underline on hover of nav links
[] increase spacigng between text and underline. Use border bottom for this? What's the best method?
[] sort responsiveness of hero

=== 20.01.2024 ===

? learnt that local images must be imported/required before using them in react. learn more about why.
? cannot require modeules from outside the src file. why?
[] learn about project structure and choose one
[] turn hero into slider?

=== 22.01.2024 ===

- changed from css to css modules
- implemented browser router to handle uodates of url to display components
- implemented Link element from browserrouter to replace <a> tags
  [?] figure out how to use logical operator to set class names on line 27 of Navbar.js Originally was <ul className={`links ${active && “active”}`}> How does this get changed if using CSS modules? As a quick fix I’ve removed the second classname.
  [?] What does Outlet do in BrowserRouter?
  [?] Line 7 of productcard.js will not render image when passing the url for image along as a prop. why? Using a hardcoded placeholder image for now.
- Made product card accept props and display them in the JSX and passed these props through from shop.js
- mapped through list of products in shop.js and produced a productcard compoennt for each. Used usestate hook to set productlist in a variable
  /[?] when trying to import productlist from an external file and setting it to a state variable, I cannot map through> Not sure what sort of object it is returning. Tried to edit the external file from an array of objects, to a function which returns that same array of objects. This didn't work. How can I bring in set that array and assign to the state variable but keep that manual data ein an external file?
  [] had a thought that re the issue iwth some components hitting the bnavbar too closely, this might now be rectified in the app component because nav is now a 'static' component and a constant feature of every page.
- fixed padding and some misc css issues
- created placeholder for misc pages

=== 23.01.2023 ===

- <img src={require('/Users/zv/Desktop/projects/alta-loma/client/src/assets/Natural+Soap+And+Bath+Bomb.jpeg')} /> This was original code. Images have now been moved to public folder. Wouldn't be able to host otherwise. URLS have all been changed to '/2.jpg' because they directly ref the public folder?
  ? Look into why images must be sourced from the public folder
  [] check all css files and change class names to less specific names now that we're usingmodules (eg heroWrapper becomes wrapper)
  /[] take off all unecessary margins and padding from nav and pages
  [] make badge icon on shopping cart transparent(can see outer edge of circle when background is dark)
- created journal page. learnt to use nth child to target siblings of that element and flex row-reverse
  [] figure how to change background color and font color on other components when one component is active (i.e. when on journal page, color needs to switch theme and then back again when component is not active.)
- looped through journal list to create journal component.
- why isn't destructuring the prop object working?
