/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function buildMenu() {
  const sections = document.querySelectorAll('section')
  let menuList = document.querySelector('#navbar__list'); 
  console.log('test');
  let firstLink = true;
  for(const section of sections) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link ${firstLink ? "menu__link--active" : ""}" data-link="${section.dataset.nav}"> ${section.dataset.nav} </a>`;
    menuList.appendChild(listItem);
    firstLink = false;
  }
}
buildMenu();
// Scroll to section on link click

// Set sections as active


