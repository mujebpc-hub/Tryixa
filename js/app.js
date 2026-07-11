/*===================================================
    TRYIXA APP
    Part 1
===================================================*/

"use strict";

/*==============================
    APP OBJECT
==============================*/

const Tryixa = {

    name: "Tryixa",

    version: "0.1",

    developer: "Tryixa Team",

    initialized: false

};


/*==============================
    DOM ELEMENTS
==============================*/

const loader = document.getElementById("loader");

const app = document.getElementById("app");


/*==============================
    START APPLICATION
==============================*/

document.addEventListener("DOMContentLoaded", () => {

    console.clear();

    console.log("===================================");

    console.log(" TRYIXA SOCIAL PLATFORM ");

    console.log(" Version :", Tryixa.version);

    console.log(" Status  : Loading...");

    console.log("===================================");

    initializeApp();

});


/*==============================
    INITIALIZE APP
==============================*/

function initializeApp(){

    showLoader();

    setTimeout(() => {

        hideLoader();

        Tryixa.initialized = true;

        console.log("Tryixa Started Successfully.");

    },2000);

}


/*==============================
    SHOW LOADER
==============================*/

function showLoader(){

    if(loader){

        loader.style.display = "flex";

    }

}


/*==============================
    HIDE LOADER
==============================*/

function hideLoader(){

    if(loader){

        loader.style.display = "none";

    }

}


/*==============================
    FUTURE FUNCTIONS
==============================*/

// loadStories();

// loadFeed();

// loadReels();

// initializeNavigation();

// initializeChat();

// initializeProfile();

// initializeSearch();

/*===================================================
    STORY SYSTEM
    Part 2
===================================================*/

const storyData = [

    {
        name: "Tryixa",
        image: "assets/images/default-user.jpg"
    },

    {
        name: "Alex",
        image: "assets/images/default-user.jpg"
    },

    {
        name: "Emma",
        image: "assets/images/default-user.jpg"
    },

    {
        name: "John",
        image: "assets/images/default-user.jpg"
    },

    {
        name: "Sophia",
        image: "assets/images/default-user.jpg"
    },

    {
        name: "David",
        image: "assets/images/default-user.jpg"
    }

];


/*==============================
    LOAD STORIES
==============================*/

function loadStories(){

    const stories = document.getElementById("stories");

    if(!stories) return;

    stories.innerHTML = "";

    storyData.forEach(user=>{

        stories.innerHTML += `

        <div class="story">

            <div class="story-image">

                <img src="${user.image}" alt="${user.name}">

            </div>

            <div class="story-name">

                ${user.name}

            </div>

        </div>

        `;

    });

}


/*==============================
    START STORIES
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

    loadStories();

});

/*===================================================
    FEED SYSTEM
    Part 3
===================================================*/

const feedData = [

    {
        username: "Tryixa",
        avatar: "assets/images/default-user.jpg",
        image: "assets/images/post1.jpg",
        caption: "Welcome to Tryixa 🚀",
        likes: 1250
    },

    {
        username: "Alex",
        avatar: "assets/images/default-user.jpg",
        image: "assets/images/post2.jpg",
        caption: "Beautiful Morning 🌅",
        likes: 854
    },

    {
        username: "Sophia",
        avatar: "assets/images/default-user.jpg",
        image: "assets/images/post3.jpg",
        caption: "Keep Learning ❤️",
        likes: 2401
    }

];


/*==============================
    LOAD FEED
==============================*/

function loadFeed(){

    const feed = document.getElementById("feed");

    if(!feed) return;

    feed.innerHTML = "";

    feedData.forEach(post=>{

        feed.innerHTML += `

<div class="post-card">

    <div class="post-header">

        <div class="post-user">

            <img src="${post.avatar}" alt="">

            <div class="post-user-info">

                <h4>${post.username}</h4>

                <span>Just Now</span>

            </div>

        </div>

        <div class="post-menu">

            ⋮

        </div>

    </div>

    <div class="post-image">

        <img src="${post.image}" alt="">

    </div>

    <div class="post-actions">

        <div class="post-left-actions">

            <button class="action-btn">❤</button>

            <button class="action-btn">💬</button>

            <button class="action-btn">📤</button>

        </div>

    </div>

    <div class="post-likes">

        ${post.likes} Likes

    </div>

    <div class="post-caption">

        <strong>${post.username}</strong>

        ${post.caption}

    </div>

</div>

`;

    });

}

/*===================================================
    REELS SYSTEM
    Part 4
===================================================*/

const reelsData = [

    {

        username:"Tryixa",

        video:"assets/videos/demo.mp4",

        caption:"Welcome to Tryixa Reels 🚀"

    },

    {

        username:"Alex",

        video:"assets/videos/demo2.mp4",

        caption:"Amazing Nature 🌿"

    },

    {

        username:"Sophia",

        video:"assets/videos/demo3.mp4",

        caption:"Learning Never Stops ❤️"

    }

];


/*==============================
    LOAD REELS
==============================*/

function loadReels(){

    const reels=document.getElementById("reels");

    if(!reels) return;

    reels.innerHTML="";

    reelsData.forEach(reel=>{

        reels.innerHTML += `

<div class="reel-card">

    <video
        muted
        loop
        playsinline
    >

        <source
            src="${reel.video}"
            type="video/mp4"
        >

    </video>

    <div class="play-btn">

        ▶

    </div>

    <div class="live-badge">

        Reel

    </div>

    <div class="reel-overlay">

        <div class="reel-user">

            <h3>@${reel.username}</h3>

            <p>${reel.caption}</p>

        </div>

        <div class="reel-actions">

            <button>❤</button>

            <button>💬</button>

            <button>📤</button>

        </div>

    </div>

    <div class="video-progress">

        <span></span>

    </div>

</div>

`;

    });

}


/*==============================
    AUTO PLAY REELS
==============================*/

function startReels(){

    const videos=document.querySelectorAll("#reels video");

    videos.forEach(video=>{

        video.play().catch(()=>{

            console.log("Autoplay blocked.");

        });

    });

}

/*===================================================
    NAVIGATION SYSTEM
    Part 5
===================================================*/


const bottomNavItems = document.querySelectorAll(".bottom-nav a");


function initializeNavigation(){

    bottomNavItems.forEach((item)=>{

        item.addEventListener("click",(e)=>{

            e.preventDefault();

            bottomNavItems.forEach(nav=>{

                nav.classList.remove("active");

            });

            item.classList.add("active");

            const section = item.querySelector("small").innerText;

            console.log(section + " Opened");

        });

    });

}



/*==================================
    FLOATING BUTTON
==================================*/

const createButton = document.getElementById("createPost");

if(createButton){

    createButton.addEventListener("click",()=>{

        console.log("Create Post Clicked");

    });

}



/*==================================
    AI BUTTON
==================================*/

const aiButton = document.getElementById("aiAssistantBtn");

if(aiButton){

    aiButton.addEventListener("click",()=>{

        console.log("AI Assistant Open");

    });

}

/*===================================================
    SEARCH, CHAT & PROFILE
    Part 6
===================================================*/


const searchOverlay = document.getElementById("searchOverlay");

const notificationPanel = document.getElementById("notificationPanel");

const chatPopup = document.getElementById("chatPopup");

const profilePopup = document.getElementById("profilePopup");

const searchInput = document.getElementById("searchInput");

const notificationBtn = document.getElementById("notificationBtn");

const messageBtn = document.getElementById("messageBtn");


/*====================================
        SEARCH
====================================*/

function openSearch(){

    if(searchOverlay){

        searchOverlay.classList.remove("hidden");

    }

}

function closeSearch(){

    if(searchOverlay){

        searchOverlay.classList.add("hidden");

    }

}


/*====================================
        NOTIFICATION
====================================*/

function toggleNotifications(){

    if(notificationPanel){

        notificationPanel.classList.toggle("hidden");

    }

}


/*====================================
        CHAT
====================================*/

function toggleChat(){

    if(chatPopup){

        chatPopup.classList.toggle("hidden");

    }

}


/*====================================
        PROFILE
====================================*/

function toggleProfile(){

    if(profilePopup){

        profilePopup.classList.toggle("hidden");

    }

}


/*====================================
        EVENTS
====================================*/

if(notificationBtn){

    notificationBtn.addEventListener("click",()=>{

        toggleNotifications();

    });

}


if(messageBtn){

    messageBtn.addEventListener("click",()=>{

        toggleChat();

    });

}


/*====================================
    ESC KEY CLOSE
====================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeSearch();

        notificationPanel?.classList.add("hidden");

        chatPopup?.classList.add("hidden");

        profilePopup?.classList.add("hidden");

    }

});

/*===================================================
    TRYIXA UTILITIES
    Part 7
===================================================*/

/*==============================
    TOAST MESSAGE
==============================*/

const toast = document.getElementById("toast");

function showToast(message = "Welcome to Tryixa") {

    if (!toast) return;

    toast.textContent = message;

    toast.style.opacity = "1";

    setTimeout(() => {

        toast.style.opacity = "0";

    }, 3000);

}


/*==============================
    OFFLINE / ONLINE STATUS
==============================*/

const offlineBanner = document.getElementById("offlineBanner");

function updateNetworkStatus() {

    if (!offlineBanner) return;

    if (navigator.onLine) {

        offlineBanner.style.display = "none";

        showToast("Internet Connected");

    } else {

        offlineBanner.style.display = "block";

        showToast("No Internet Connection");

    }

}

window.addEventListener("online", updateNetworkStatus);

window.addEventListener("offline", updateNetworkStatus);


/*==============================
    DATE & TIME
==============================*/

function getCurrentTime() {

    return new Date().toLocaleTimeString();

}


/*==============================
    RANDOM ID
==============================*/

function generateID() {

    return "TX-" + Math.random().toString(36).substring(2, 10);

}


/*==============================
    FUTURE HELPERS
==============================*/

function log(message) {

    console.log("[TRYIXA]", message);

}

function warning(message) {

    console.warn("[TRYIXA]", message);

}

function error(message) {

    console.error("[TRYIXA]", message);

}

/*===================================================
    TRYIXA APP FINAL
    Part 8
===================================================*/


/*====================================
        LOCAL STORAGE
====================================*/

const Storage={

    save(key,data){

        localStorage.setItem(

            key,

            JSON.stringify(data)

        );

    },

    load(key){

        return JSON.parse(

            localStorage.getItem(key)

        );

    },

    remove(key){

        localStorage.removeItem(key);

    }

};


/*====================================
        FUTURE API
====================================*/

const API={

    baseURL:"",

    async get(url){

        console.log("GET :",url);

    },

    async post(url,data){

        console.log("POST :",url,data);

    }

};


/*====================================
        FUTURE AI
====================================*/

const AI={

    imageGenerator(){},

    videoGenerator(){},

    chatbot(){},

    voiceAssistant(){}

};


/*====================================
        FUTURE AUTH
====================================*/

const AUTH={

    login(){},

    logout(){},

    signup(){},

    currentUser(){}

};


/*====================================
        FUTURE DATABASE
====================================*/

const DATABASE={

    users:[],

    posts:[],

    stories:[],

    reels:[]

};


/*====================================
        APP READY
====================================*/

window.Tryixa={

    App:Tryixa,

    Storage,

    API,

    AI,

    AUTH,

    DATABASE

};


console.log("================================");

console.log("TRYIXA READY");

console.log(window.Tryixa);

console.log("================================");
