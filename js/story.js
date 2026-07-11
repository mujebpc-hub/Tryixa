/*==================================================
                TRYIXA STORY MODULE
                    Version 1.0
==================================================*/

"use strict";

/*====================================
            STORY DATA
====================================*/

const stories = [

    {

        id:1,

        username:"Tryixa",

        avatar:"assets/images/default-user.jpg",

        viewed:false

    },

    {

        id:2,

        username:"Alex",

        avatar:"assets/images/default-user.jpg",

        viewed:false

    },

    {

        id:3,

        username:"Sophia",

        avatar:"assets/images/default-user.jpg",

        viewed:false

    },

    {

        id:4,

        username:"John",

        avatar:"assets/images/default-user.jpg",

        viewed:false

    },

    {

        id:5,

        username:"Emma",

        avatar:"assets/images/default-user.jpg",

        viewed:false

    }

];


/*====================================
        CREATE STORY CARD
====================================*/

function createStoryCard(story){

    return `

    <div class="story-card" data-id="${story.id}">

        <div class="story-avatar">

            <img src="${story.avatar}" alt="${story.username}">

        </div>

        <span>${story.username}</span>

    </div>

    `;

}


/*====================================
        LOAD STORIES
====================================*/

function loadStoriesModule(){

    const container=document.getElementById("stories");

    if(!container) return;

    container.innerHTML="";

    stories.forEach(story=>{

        container.innerHTML+=createStoryCard(story);

    });

}


/*====================================
        STORY CLICK
====================================*/

function initializeStoryEvents(){

    document.addEventListener("click",(event)=>{

        const card=event.target.closest(".story-card");

        if(!card) return;

        const id=Number(card.dataset.id);

        console.log("Story Open :",id);

    });

}


/*====================================
        STORY MODULE INIT
====================================*/

function initializeStories(){

    loadStoriesModule();

    initializeStoryEvents();

    console.log("Story Module Ready");

}

/*==================================================
            TRYIXA STORY VIEWER
                Part 2
==================================================*/

/*====================================
        STORY VIEWER ELEMENTS
====================================*/

const storyViewer = document.getElementById("storyViewer");

const storyViewerImage = document.getElementById("storyViewerImage");

const storyViewerUsername = document.getElementById("storyViewerUsername");

const storyProgress = document.getElementById("storyProgress");

const closeStoryButton = document.getElementById("closeStory");


let currentStoryIndex = 0;


/*====================================
        OPEN STORY
====================================*/

function openStory(index){

    currentStoryIndex = index;

    const story = stories[index];

    if(!story) return;

    if(storyViewer){

        storyViewer.classList.remove("hidden");

    }

    if(storyViewerImage){

        storyViewerImage.src = story.avatar;

    }

    if(storyViewerUsername){

        storyViewerUsername.textContent = story.username;

    }

    resetStoryProgress();

}


/*====================================
        CLOSE STORY
====================================*/

function closeStory(){

    if(storyViewer){

        storyViewer.classList.add("hidden");

    }

}


/*====================================
        NEXT STORY
====================================*/

function nextStory(){

    currentStoryIndex++;

    if(currentStoryIndex >= stories.length){

        closeStory();

        return;

    }

    openStory(currentStoryIndex);

}


/*====================================
        PREVIOUS STORY
====================================*/

function previousStory(){

    currentStoryIndex--;

    if(currentStoryIndex < 0){

        currentStoryIndex = 0;

    }

    openStory(currentStoryIndex);

}


/*====================================
        PROGRESS RESET
====================================*/

function resetStoryProgress(){

    if(!storyProgress) return;

    storyProgress.style.width = "0%";

}


/*====================================
        CLOSE BUTTON
====================================*/

if(closeStoryButton){

    closeStoryButton.addEventListener("click",closeStory);

}

/*==================================================
            TRYIXA STORY TIMER
                Part 3
==================================================*/

/*====================================
        STORY TIMER
====================================*/

let storyTimer = null;

let storyDuration = 5000;

let progressInterval = null;


/*====================================
        START STORY TIMER
====================================*/

function startStoryTimer(){

    clearStoryTimer();

    animateStoryProgress();

    storyTimer = setTimeout(()=>{

        nextStory();

    },storyDuration);

}


/*====================================
        CLEAR TIMER
====================================*/

function clearStoryTimer(){

    if(storyTimer){

        clearTimeout(storyTimer);

        storyTimer = null;

    }

    if(progressInterval){

        clearInterval(progressInterval);

        progressInterval = null;

    }

}


/*====================================
        PROGRESS ANIMATION
====================================*/

function animateStoryProgress(){

    if(!storyProgress) return;

    let width = 0;

    storyProgress.style.width = "0%";

    progressInterval = setInterval(()=>{

        width += 2;

        storyProgress.style.width = width + "%";

        if(width >= 100){

            clearInterval(progressInterval);

        }

    },storyDuration/50);

}


/*====================================
        STORY SEEN
====================================*/

function markStorySeen(index){

    if(stories[index]){

        stories[index].viewed = true;

    }

}


/*====================================
        UPDATE STORY CARD
====================================*/

function refreshStoryCards(){

    document.querySelectorAll(".story-card").forEach((card,index)=>{

        if(stories[index].viewed){

            card.classList.add("viewed");

        }

    });

}

/*==================================================
            TRYIXA MY STORY
                Part 4
==================================================*/

/*====================================
            MY STORY
====================================*/

const myStory = {

    id:0,

    username:"You",

    avatar:"assets/images/default-user.jpg",

    viewed:false

};


/*====================================
        ADD MY STORY
====================================*/

function addMyStory(){

    const container = document.getElementById("stories");

    if(!container) return;

    const html = `

    <div class="story-card my-story">

        <div class="story-avatar">

            <img src="${myStory.avatar}" alt="My Story">

            <span class="add-story-icon">+</span>

        </div>

        <span>Your Story</span>

    </div>

    `;

    container.insertAdjacentHTML("afterbegin", html);

}


/*====================================
        STORY SETTINGS
====================================*/

const StorySettings = {

    autoPlay:true,

    duration:5000,

    loop:false,

    showProgress:true,

    markSeen:true

};


/*====================================
        STORY EVENTS
====================================*/

function initializeMyStory(){

    document.addEventListener("click",(event)=>{

        const myCard = event.target.closest(".my-story");

        if(!myCard) return;

        console.log("Upload Story");

        showToast("Story Upload Coming Soon");

    });

}


/*====================================
        UPDATE SETTINGS
====================================*/

function updateStorySettings(settings={}){

    Object.assign(

        StorySettings,

        settings

    );

}


/*====================================
        INIT MY STORY
====================================*/

document.addEventListener("DOMContentLoaded",()=>{

    addMyStory();

    initializeMyStory();

});

/*==================================================
            TRYIXA STORY MODULE
                Part 5 (Final)
==================================================*/


/*====================================
        STORY STORAGE
====================================*/

const StoryStorage = {

    save(){

        localStorage.setItem(

            "tryixaStories",

            JSON.stringify(stories)

        );

    },

    load(){

        const data = localStorage.getItem(

            "tryixaStories"

        );

        if(!data) return;

        try{

            const saved = JSON.parse(data);

            stories.length = 0;

            saved.forEach(item=>stories.push(item));

        }

        catch(error){

            console.error(error);

        }

    }

};


/*====================================
        STORY API
====================================*/

const StoryAPI = {

    async fetchStories(){

        console.log(

            "Future API : Stories"

        );

    },

    async uploadStory(file){

        console.log(

            "Future Upload",

            file

        );

    }

};


/*====================================
        STORY UTILITIES
====================================*/

function refreshStories(){

    loadStoriesModule();

}


function resetStories(){

    stories.forEach(story=>{

        story.viewed = false;

    });

    refreshStoryCards();

}


function removeStory(id){

    const index = stories.findIndex(

        story=>story.id===id

    );

    if(index!==-1){

        stories.splice(index,1);

        refreshStories();

    }

}


/*====================================
        FUTURE PLACEHOLDERS
====================================*/

// Firebase Storage

// Cloudflare R2

// Tryixa Backend

// Story Analytics

// Story Likes

// Story Views

// Story Replies

// Story Privacy

// Close Friends

// Story Music

// Story AI Stickers

// Story AI Caption

// Story AI Voice

// Story Download

// Story Share

// Story Archive

// Story Highlights


/*====================================
        EXPORT
====================================*/

window.TryixaStories = {

    initializeStories,

    loadStoriesModule,

    openStory,

    closeStory,

    nextStory,

    previousStory,

    refreshStories,

    resetStories,

    removeStory,

    StoryStorage,

    StoryAPI

};


console.log(

    "Story Module Loaded"

);
