/*==================================================
            TRYIXA NAVIGATION MODULE
                    Part 1
==================================================*/

"use strict";


/*====================================
        PAGE REFERENCES
====================================*/

const pages = {

    home: document.getElementById("home"),

    search: document.getElementById("search"),

    create: document.getElementById("create"),

    reels: document.getElementById("reels"),

    chat: document.getElementById("chat"),

    notifications: document.getElementById("notifications"),

    profile: document.getElementById("profile")

};


/*====================================
        HIDE ALL PAGES
====================================*/

function hideAllPages(){

    Object.values(pages).forEach(page=>{

        if(page){

            page.style.display = "none";

        }

    });

}


/*====================================
        OPEN PAGE
====================================*/

function openPage(pageName){

    hideAllPages();

    if(!pages[pageName]) return;

    pages[pageName].style.display = "block";

}


/*====================================
        NAVIGATION CLICK
====================================*/

function initializeNavigation(){

    document.querySelectorAll("[data-page]").forEach(button=>{

        button.addEventListener("click",()=>{

            const page = button.dataset.page;

            openPage(page);

        });

    });

}


/*====================================
        START PAGE
====================================*/

function initializeNavigationModule(){

    openPage("home");

    initializeNavigation();

    console.log("Navigation Ready");

}

/*==================================================
            TRYIXA NAVIGATION MODULE
                    Part 2
==================================================*/


/*====================================
        ACTIVE NAVIGATION
====================================*/

function updateActiveNavigation(pageName){

    document.querySelectorAll("[data-page]").forEach(button=>{

        button.classList.remove("active");

        if(button.dataset.page===pageName){

            button.classList.add("active");

        }

    });

}


/*====================================
        PAGE ANIMATION
====================================*/

function animatePage(page){

    if(!page) return;

    page.classList.remove("page-show");

    void page.offsetWidth;

    page.classList.add("page-show");

}


/*====================================
        UPDATE PAGE
====================================*/

function showPage(pageName){

    hideAllPages();

    const page = pages[pageName];

    if(!page) return;

    page.style.display="block";

    animatePage(page);

    updateActiveNavigation(pageName);

}


/*====================================
        NAVIGATION CLICK
====================================*/

function initializeNavigationClicks(){

    document.querySelectorAll("[data-page]").forEach(button=>{

        button.addEventListener("click",()=>{

            const pageName = button.dataset.page;

            showPage(pageName);

        });

    });

}

/*==================================================
            TRYIXA NAVIGATION MODULE
                    Part 3
==================================================*/


/*====================================
        URL HASH ROUTING
====================================*/

function updateURL(pageName){

    location.hash = pageName;

}


/*====================================
        OPEN HASH PAGE
====================================*/

function openHashPage(){

    const hash = location.hash.replace("#","");

    if(hash && pages[hash]){

        showPage(hash);

    }

    else{

        showPage("home");

    }

}


/*====================================
        HASH CHANGE
====================================*/

function initializeHashRouting(){

    window.addEventListener("hashchange",()=>{

        openHashPage();

    });

}


/*====================================
        BROWSER HISTORY
====================================*/

function initializeHistorySupport(){

    window.addEventListener("popstate",()=>{

        openHashPage();

    });

}


/*====================================
        NAVIGATION UPDATE
====================================*/

function navigateTo(pageName){

    if(!pages[pageName]) return;

    updateURL(pageName);

    showPage(pageName);

}

/*==================================================
            TRYIXA NAVIGATION MODULE
                    Part 4
==================================================*/


/*====================================
        MOBILE MENU
====================================*/

let mobileMenuOpen = false;

function toggleMobileMenu(){

    const menu = document.querySelector(".mobile-menu");

    if(!menu) return;

    mobileMenuOpen = !mobileMenuOpen;

    menu.classList.toggle("show", mobileMenuOpen);

}


/*====================================
        MENU BUTTON
====================================*/

function initializeMobileMenu(){

    const button = document.querySelector(".menu-button");

    if(!button) return;

    button.addEventListener("click", toggleMobileMenu);

}


/*====================================
        CLOSE MENU AFTER CLICK
====================================*/

function closeMenuAfterNavigation(){

    document.querySelectorAll("[data-page]").forEach(button=>{

        button.addEventListener("click",()=>{

            const menu = document.querySelector(".mobile-menu");

            if(menu){

                menu.classList.remove("show");

            }

            mobileMenuOpen = false;

        });

    });

}


/*====================================
        KEYBOARD SHORTCUTS
====================================*/

function initializeKeyboardShortcuts(){

    document.addEventListener("keydown",(event)=>{

        if(event.target.tagName==="INPUT") return;

        if(event.key==="1") navigateTo("home");

        if(event.key==="2") navigateTo("search");

        if(event.key==="3") navigateTo("create");

        if(event.key==="4") navigateTo("reels");

        if(event.key==="5") navigateTo("chat");

        if(event.key==="6") navigateTo("notifications");

        if(event.key==="7") navigateTo("profile");

    });

}


/*====================================
        ESC CLOSE MENU
====================================*/

function initializeEscapeKey(){

    document.addEventListener("keydown",(event)=>{

        if(event.key!=="Escape") return;

        const menu = document.querySelector(".mobile-menu");

        if(menu){

            menu.classList.remove("show");

        }

        mobileMenuOpen = false;

    });

}

/*==================================================
            TRYIXA NAVIGATION MODULE
                    Part 5
==================================================*/


/*====================================
        STORAGE KEY
====================================*/

const NAVIGATION_STORAGE_KEY = "tryixa_navigation";


/*====================================
        SAVE LAST PAGE
====================================*/

function saveCurrentPage(pageName){

    localStorage.setItem(

        NAVIGATION_STORAGE_KEY,

        pageName

    );

}


/*====================================
        LOAD LAST PAGE
====================================*/

function loadCurrentPage(){

    return localStorage.getItem(

        NAVIGATION_STORAGE_KEY

    ) || "home";

}


/*====================================
        BACKEND READY
====================================*/

async function fetchNavigation(){

    /*
        Future API

        GET /api/navigation

    */

    return true;

}


async function updateNavigation(pageName){

    /*
        Future API

        POST /api/navigation

    */

    console.log("Navigation Synced:",pageName);

}


/*====================================
        OPEN APPLICATION
====================================*/

function openApplication(pageName){

    navigateTo(pageName);

    saveCurrentPage(pageName);

    updateNavigation(pageName);

}


/*====================================
        EXPORT MODULE
====================================*/

window.TryixaNavigation={

    open:openApplication,

    navigate:navigateTo,

    save:saveCurrentPage,

    load:loadCurrentPage,

    sync:updateNavigation

};
