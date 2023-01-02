/* for the burger menu close and open functionallity */

/* for the mobile menu */
var menu = document.getElementById("overlay-menu");
var mobileMenu = document.getElementById("mobile-menu");
var burgerIcon = document.getElementById("burger-icon");
var closeBurgerMenu = document.getElementById("close-burger-menu");
/* for the drop down in the mobile menu */
var MenuItemLink = document.getElementById("menu-item");
var dropDownContent = document.getElementById("drop-down-content");

document.addEventListener('DOMContentLoaded', events);

function events() {
    burgerIcon.addEventListener("click", () => {
        toggle_classes(mobileMenu, "hidden", "flex");
        toggle_classes(menu, ["w-0", "h-0", "opacity-0"], ["w-screen", "h-screen", "opacity-95"]);
    });

    closeBurgerMenu.addEventListener("click", () => {
        toggle_classes(mobileMenu, "flex", "hidden");
        toggle_classes(menu, ["w-screen", "h-screen", "opacity-95"], ["w-0", "h-0", "opacity-0"]);
    });

    MenuItemLink.addEventListener("click", () => {
        dropDownContent.classList.toggle("hidden");
    });
}

// toggle class function
function toggle_classes(element, ClasesToRemove, ClasesToAdd) {
    if (typeof ClasesToRemove == "object") {
        element.classList.remove(...ClasesToRemove);

    } else {
        element.classList.remove(ClasesToRemove);
    }   
    
    if (typeof ClasesToAdd == "object") {
        element.classList.add(...ClasesToAdd);

    } else {
        element.classList.add(ClasesToAdd);
    }   

}

// this function is used to open the menu
function openMenu() {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    /* ** */
    menu.classList.remove("w-0", "h-0", "opacity-0");
    menu.classList.add("w-screen", "h-screen", "opacity-95");
}

// this function is used to close the menu
function closeMenu() {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    /*** */
    menu.classList.remove("w-screen", "h-screen", "opactiy-95");
    menu.classList.add("w-0", "h-0", "opacity-0");
}
/* *** */

/* for dark and light mode */
/* icons (mon, sun) */
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
/* theme variable */
const userTheme = localStorage.getItem("currentThemeMode");

/* to show or hide icons */
const iconToggle = () => {
    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
}

/* check the current selected theme mode */
const checkTheme = () => {
    if (userTheme == "dark") {
        document.documentElement.classList.add("dark");
        moon.classList.add("hidden");
        return;
    }
    sun.classList.add("hidden");
}

/* manual change the theme when click */
const switchTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("currentThemeMode", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("currentThemeMode", "dark");
    iconToggle();
}

/* assign events listeners to icons buttons (moon, sun) */
moon.addEventListener("click", () => {
    switchTheme();
});

sun.addEventListener("click", () => {
    switchTheme();
});

/* call the check theme if the page reloaded */
checkTheme();