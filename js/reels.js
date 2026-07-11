/*==================================================
                TRYIXA REELS MODULE
                    Part 1
==================================================*/

"use strict";

/*====================================
            REELS DATA
====================================*/

const reels = [

    {

        id:1,

        username:"Tryixa",

        avatar:"assets/images/user-01.webp",

        video:"assets/reels/reel-01.mp4",

        caption:"Welcome to Tryixa 🚀",

        music:"Original Audio",

        likes:1500,

        comments:120,

        shares:45,

        verified:true

    },

    {

        id:2,

        username:"Alex",

        avatar:"assets/images/user-02.webp",

        video:"assets/reels/reel-02.mp4",

        caption:"Beautiful Nature 🌿",

        music:"Nature Sound",

        likes:960,

        comments:48,

        shares:21,

        verified:false

    },

    {

        id:3,

        username:"Sophia",

        avatar:"assets/images/user-03.webp",

        video:"assets/reels/reel-03.mp4",

        caption:"Travel Life ✈️",

        music:"Travel Beat",

        likes:2840,

        comments:210,

        shares:98,

        verified:true

    }

];


/*====================================
        CREATE REEL CARD
====================================*/

function createReelCard(reel){

    return `

<section class="reel-card" data-id="${reel.id}">

<video
class="reel-video"
src="${reel.video}"
loop
playsinline
preload="metadata">
</video>

<div class="reel-overlay">

<div class="reel-user">

<img src="${reel.avatar}" alt="${reel.username}">

<div>

<h4>

${reel.username}

${reel.verified ? "✔️" : ""}

</h4>

<p>${reel.caption}</p>

<small>${reel.music}</small>

</div>

</div>

<div class="reel-actions">

<button class="reel-like">❤️</button>

<button class="reel-comment">💬</button>

<button class="reel-share">📤</button>

<button class="reel-save">🔖</button>

</div>

</div>

</section>

`;

}


/*====================================
            LOAD REELS
====================================*/

function loadReelsModule(){

    const container = document.getElementById("reels");

    if(!container) return;

    container.innerHTML="";

    reels.forEach(reel=>{

        container.innerHTML += createReelCard(reel);

    });

}


/*====================================
        INITIALIZE REELS
====================================*/

function initializeReels(){

    loadReelsModule();

    console.log("Reels Module Ready");

}

/*==================================================
                TRYIXA REELS MODULE
                    Part 2
==================================================*/


/*====================================
        AUTO PLAY SYSTEM
====================================*/

let currentReel = null;


function playReel(video){

    if(!video) return;

    if(currentReel && currentReel!==video){

        currentReel.pause();

    }

    currentReel = video;

    video.play().catch(()=>{});

}


/*====================================
        PAUSE REEL
====================================*/

function pauseReel(video){

    if(!video) return;

    video.pause();

}


/*====================================
        AUTO PLAY ON SCREEN
====================================*/

function initializeAutoPlay(){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            const video = entry.target;

            if(entry.isIntersecting){

                playReel(video);

            }

            else{

                pauseReel(video);

            }

        });

    },{

        threshold:0.7

    });


    document.querySelectorAll(".reel-video").forEach(video=>{

        observer.observe(video);

    });

}


/*====================================
        MUTE / UNMUTE
====================================*/

function initializeMuteSystem(){

    document.addEventListener("click",(event)=>{

        const video = event.target.closest(".reel-video");

        if(!video) return;

        video.muted = !video.muted;

        showToast(

            video.muted

            ? "Muted"

            : "Sound On"

        );

    });

}


/*====================================
        PLAY / PAUSE
====================================*/

function initializePlayPause(){

    document.addEventListener("dblclick",(event)=>{

        const video = event.target.closest(".reel-video");

        if(!video) return;

        if(video.paused){

            video.play();

        }

        else{

            video.pause();

        }

    });

}

/*==================================================
                TRYIXA REELS MODULE
                    Part 3
==================================================*/


/*====================================
            LIKE SYSTEM
====================================*/

function initializeReelLikeSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".reel-like");

        if(!button) return;

        const card = button.closest(".reel-card");

        const id = Number(card.dataset.id);

        const reel = reels.find(item=>item.id===id);

        if(!reel) return;

        if(button.classList.contains("liked")){

            button.classList.remove("liked");

            button.textContent="❤️";

            reel.likes--;

        }

        else{

            button.classList.add("liked");

            button.textContent="💖";

            reel.likes++;

        }

        updateReelStats(card,reel);

    });

}


/*====================================
            COMMENT
====================================*/

function initializeReelCommentSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".reel-comment");

        if(!button) return;

        showToast("Comments Coming Soon");

    });

}


/*====================================
            SHARE
====================================*/

function initializeReelShareSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".reel-share");

        if(!button) return;

        const card = button.closest(".reel-card");

        const id = Number(card.dataset.id);

        const reel = reels.find(item=>item.id===id);

        if(!reel) return;

        reel.shares++;

        updateReelStats(card,reel);

        showToast("Reel Shared");

    });

}


/*====================================
            SAVE
====================================*/

function initializeReelSaveSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".reel-save");

        if(!button) return;

        button.classList.toggle("saved");

        button.textContent =

        button.classList.contains("saved")

        ? "📌"

        : "🔖";

    });

}


/*====================================
        UPDATE STATS
====================================*/

function updateReelStats(card,reel){

    let stats = card.querySelector(".reel-stats");

    if(!stats){

        stats = document.createElement("div");

        stats.className="reel-stats";

        card.appendChild(stats);

    }

    stats.innerHTML=`

    ❤️ ${reel.likes}

    &nbsp;•&nbsp;

    💬 ${reel.comments}

    &nbsp;•&nbsp;

    📤 ${reel.shares}

    `;

}

/*==================================================
                TRYIXA REELS MODULE
                    Part 4
==================================================*/


/*====================================
            VIEW COUNTER
====================================*/

function increaseReelView(id){

    const reel = reels.find(item=>item.id===id);

    if(!reel) return;

    if(!reel.views){

        reel.views = 0;

    }

    reel.views++;

}


/*====================================
        REEL OBSERVER
====================================*/

function initializeReelObserver(){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const card = entry.target;

            const id = Number(card.dataset.id);

            increaseReelView(id);

            updateReelViews(card,id);

        });

    },{

        threshold:0.8

    });

    document.querySelectorAll(".reel-card").forEach(card=>{

        observer.observe(card);

    });

}


/*====================================
        UPDATE VIEWS
====================================*/

function updateReelViews(card,id){

    const reel = reels.find(item=>item.id===id);

    if(!reel) return;

    let views = card.querySelector(".reel-views");

    if(!views){

        views = document.createElement("div");

        views.className="reel-views";

        card.appendChild(views);

    }

    views.innerHTML = `👁 ${reel.views || 0} Views`;

}


/*====================================
        SCROLL TO NEXT
====================================*/

function scrollToNextReel(){

    const cards = [...document.querySelectorAll(".reel-card")];

    const current = cards.findIndex(card=>{

        const rect = card.getBoundingClientRect();

        return rect.top >= -100 && rect.top <= 100;

    });

    if(current===-1) return;

    const next = cards[current+1];

    if(next){

        next.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }

}


/*====================================
        KEYBOARD SUPPORT
====================================*/

function initializeKeyboardNavigation(){

    document.addEventListener("keydown",(event)=>{

        if(event.key==="ArrowDown"){

            scrollToNextReel();

        }

    });

}

/*==================================================
                TRYIXA REELS MODULE
                    Part 5
==================================================*/


/*====================================
        LOCAL STORAGE
====================================*/

const REELS_STORAGE_KEY = "tryixa_reels";


function saveReelsToLocal(){

    localStorage.setItem(

        REELS_STORAGE_KEY,

        JSON.stringify(reels)

    );

}


function loadReelsFromLocal(){

    const data = localStorage.getItem(

        REELS_STORAGE_KEY

    );

    if(!data) return;

    try{

        const saved = JSON.parse(data);

        reels.length = 0;

        reels.push(...saved);

    }

    catch(error){

        console.error(error);

    }

}


/*====================================
        BACKEND READY
====================================*/

async function fetchReelsFromServer(){

    /*
        Future API

        GET /api/reels
    */

    return reels;

}


async function uploadReel(formData){

    /*
        Future API

        POST /api/reels
    */

    console.log("Backend Ready");

}


/*====================================
        REFRESH
====================================*/

async function refreshReels(){

    const data = await fetchReelsFromServer();

    if(!data) return;

    loadReelsModule();

    initializeAutoPlay();

    initializeReelObserver();

}


/*====================================
        EXPORT
====================================*/

window.TryixaReels={

    reels,

    refreshReels,

    uploadReel,

    fetchReelsFromServer

};

