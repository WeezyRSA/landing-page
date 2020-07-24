//Define Global Variables
const navContainer = document.querySelector("#navbar__list");
const navLinks = navContainer.getElementsByTagName("a");
let isClicked = false;
const sections = document.querySelectorAll("section[data-nav]"); 

// Build menu 
function buildMenu() {
  const docFragment = document.createDocumentFragment();
  
  let firstLink = true;
  sections.forEach(section => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement("a");
    linkItem.textContent = section.dataset.nav;
    linkItem.classList.add("menu__link");
    if (firstLink) {
      linkItem.classList.add("active");
    };
    linkItem.setAttribute("href", `#${section.id}`);
    listItem.appendChild(linkItem);
    docFragment.appendChild(listItem);
    firstLink = false;
  });
  navContainer.append(docFragment);
}

//Handle Click event
const handleClickEvent = e => {

  e.preventDefault();
  
  isClicked = true;

  if (e.target.nodeName === "A") {
    
    const target = e.target.getAttribute("href").slice(1);
    
    const targetSection = Array.from(sections).find(
      section => section.id === target
    );
    Array.from(navLinks).forEach(el => el.classList.remove("active"));    
    Array.from(sections).forEach(el => el.classList.remove("active-section"));
    
    e.target.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });
    targetSection.classList.add("active-section");

    isClicked = !isClicked;
  }
};

//Handle scroll event
const handleScrollEvent = () => {

  if (isClicked !== true) {

      const activeSection = Array.from(sections).find(section => {
      const topPos = section.offsetTop;
      const bottomPos = section.offsetTop + section.offsetHeight;
      const verOffset = window.pageYOffset + 300;
      const isActiveSection = verOffset >= topPos && verOffset <= bottomPos
      return isActiveSection;
      
    });    

    Array.from(navLinks).forEach(el => el.classList.remove("active"));    
    Array.from(sections).forEach(el => el.classList.remove("active-section"));

    let activeLink;

    if (activeSection) {
      activeLink = Array.from(navLinks).find(
        anchor => anchor.getAttribute("href").slice(1) === activeSection.id
      );

      activeSection.classList.add("active-section");
      activeLink.classList.add("active");
    }
  }
};
buildMenu();
navContainer.addEventListener("click", handleClickEvent);
document.addEventListener("scroll", handleScrollEvent);