/*==================================================
                TRYIXA FEED MODULE
                    Part 1
==================================================*/

"use strict";

/*====================================
            FEED DATA
====================================*/

const feedPosts = [

    {

        id:1,

        username:"Tryixa",

        avatar:"assets/images/default-user.jpg",

        image:"assets/images/post1.jpg",

        caption:"🚀 Welcome to Tryixa Social Platform.",

        likes:1200,

        comments:120,

        shares:40,

        verified:true,

        time:"Just Now"

    },

    {

        id:2,

        username:"Alex",

        avatar:"assets/images/default-user.jpg",

        image:"assets/images/post2.jpg",

        caption:"Beautiful Morning 🌅",

        likes:856,

        comments:33,

        shares:14,

        verified:false,

        time:"2h"

    },

    {

        id:3,

        username:"Sophia",

        avatar:"assets/images/default-user.jpg",

        image:"assets/images/post3.jpg",

        caption:"Keep Learning ❤️",

        likes:2401,

        comments:256,

        shares:97,

        verified:true,

        time:"5h"

    }

];


/*====================================
        CREATE POST CARD
====================================*/

function createPost(post){

    return `

<article class="post-card" data-id="${post.id}">

<div class="post-header">

<div class="post-user">

<img src="${post.avatar}" alt="${post.username}">

<div>

<h4>

${post.username}

${post.verified ? "✔️" : ""}

</h4>

<p>${post.time}</p>

</div>

</div>

<button class="post-menu">

⋮

</button>

</div>


<div class="post-image">

<img src="${post.image}" alt="Post">

</div>


<div class="post-actions">

<button class="like-btn">❤️</button>

<button class="comment-btn">💬</button>

<button class="share-btn">📤</button>

<button class="save-btn">🔖</button>

</div>


<div class="post-stats">

<strong>${post.likes}</strong> Likes

•

<strong>${post.comments}</strong> Comments

•

<strong>${post.shares}</strong> Shares

</div>


<div class="post-caption">

<strong>${post.username}</strong>

${post.caption}

</div>

</article>

`;

}


/*====================================
            LOAD FEED
====================================*/

function loadFeedModule(){

    const feed=document.getElementById("feed");

    if(!feed) return;

    feed.innerHTML="";

    feedPosts.forEach(post=>{

        feed.innerHTML += createPost(post);

    });

}


/*====================================
        INITIALIZE FEED
====================================*/

function initializeFeed(){

    loadFeedModule();

    console.log("Feed Module Ready");

}

/*==================================================
                TRYIXA FEED MODULE
                    Part 2
==================================================*/

/*====================================
            LIKE SYSTEM
====================================*/

function initializeLikeSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".like-btn");

        if(!button) return;

        const postCard = button.closest(".post-card");

        const id = Number(postCard.dataset.id);

        const post = feedPosts.find(item=>item.id===id);

        if(!post) return;

        if(button.classList.contains("liked")){

            button.classList.remove("liked");

            button.textContent="❤️";

            post.likes--;

        }

        else{

            button.classList.add("liked");

            button.textContent="💖";

            post.likes++;

        }

        updatePostStats(postCard,post);

    });

}


/*====================================
            SAVE SYSTEM
====================================*/

function initializeSaveSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".save-btn");

        if(!button) return;

        if(button.classList.contains("saved")){

            button.classList.remove("saved");

            button.textContent="🔖";

        }

        else{

            button.classList.add("saved");

            button.textContent="📌";

        }

    });

}


/*====================================
        UPDATE POST STATS
====================================*/

function updatePostStats(card,post){

    const stats = card.querySelector(".post-stats");

    if(!stats) return;

    stats.innerHTML = `

<strong>${post.likes}</strong> Likes

•

<strong>${post.comments}</strong> Comments

•

<strong>${post.shares}</strong> Shares

`;

}


/*====================================
        DOUBLE CLICK LIKE
====================================*/

function initializeDoubleTapLike(){

    document.addEventListener("dblclick",(event)=>{

        const image = event.target.closest(".post-image img");

        if(!image) return;

        const card = image.closest(".post-card");

        const button = card.querySelector(".like-btn");

        if(button && !button.classList.contains("liked")){

            button.click();

        }

    });

}

/*==================================================
                TRYIXA FEED MODULE
                    Part 3
==================================================*/

/*====================================
            COMMENT SYSTEM
====================================*/

function initializeCommentSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".comment-btn");

        if(!button) return;

        const card = button.closest(".post-card");

        const id = Number(card.dataset.id);

        const post = feedPosts.find(item=>item.id===id);

        if(!post) return;

        openCommentBox(post);

    });

}


/*====================================
        COMMENT BOX
====================================*/

function openCommentBox(post){

    console.log("Comments Open :",post.id);

    showToast("Comment System Coming Soon");

}


/*====================================
        ADD COMMENT
====================================*/

function addComment(postId,comment){

    const post = feedPosts.find(item=>item.id===postId);

    if(!post) return;

    post.comments++;

    const card = document.querySelector(

        `.post-card[data-id="${postId}"]`

    );

    if(card){

        updatePostStats(card,post);

    }

}


/*====================================
        DELETE COMMENT
====================================*/

function deleteComment(postId){

    const post = feedPosts.find(item=>item.id===postId);

    if(!post) return;

    if(post.comments>0){

        post.comments--;

    }

    const card = document.querySelector(

        `.post-card[data-id="${postId}"]`

    );

    if(card){

        updatePostStats(card,post);

    }

}


/*====================================
        COMMENT UTILITIES
====================================*/

function commentCount(postId){

    const post = feedPosts.find(

        item=>item.id===postId

    );

    return post ? post.comments : 0;

}

/*==================================================
                TRYIXA FEED MODULE
                    Part 4
==================================================*/

/*====================================
            SHARE SYSTEM
====================================*/

function initializeShareSystem(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".share-btn");

        if(!button) return;

        const card = button.closest(".post-card");

        const id = Number(card.dataset.id);

        sharePost(id);

    });

}


/*====================================
        SHARE POST
====================================*/

function sharePost(postId){

    const post = feedPosts.find(

        item=>item.id===postId

    );

    if(!post) return;

    post.shares++;

    const card = document.querySelector(

        `.post-card[data-id="${postId}"]`

    );

    if(card){

        updatePostStats(card,post);

    }

    console.log("Shared :",post.username);

    showToast("Post Shared");

}


/*====================================
        POST MENU
====================================*/

function initializePostMenu(){

    document.addEventListener("click",(event)=>{

        const button = event.target.closest(".post-menu");

        if(!button) return;

        const card = button.closest(".post-card");

        const id = Number(card.dataset.id);

        openPostMenu(id);

    });

}


/*====================================
        MORE OPTIONS
====================================*/

function openPostMenu(postId){

    console.log("Menu :",postId);

    const option = prompt(

`Choose Option

1 = Copy Link

2 = Hide Post

3 = Report Post`

    );

    switch(option){

        case "1":

            copyPostLink(postId);

            break;

        case "2":

            hidePost(postId);

            break;

        case "3":

            reportPost(postId);

            break;

        default:

            return;

    }

}


/*====================================
        COPY LINK
====================================*/

function copyPostLink(postId){

    navigator.clipboard.writeText(

        "https://tryixa.com/post/"+postId

    );

    showToast("Post Link Copied");

}


/*====================================
        HIDE POST
====================================*/

function hidePost(postId){

    const card=document.querySelector(

        `.post-card[data-id="${postId}"]`

    );

    if(card){

        card.remove();

    }

    showToast("Post Hidden");

}


/*====================================
        REPORT POST
====================================*/

function reportPost(postId){

    console.log(

        "Reported :",postId

    );

    showToast("Report Submitted");

}

/*==================================================
                TRYIXA FEED MODULE
                    Part 5
==================================================*/


/*====================================
        IMAGE CAROUSEL
====================================*/

function initializeCarousel(){

    document.addEventListener("click",(event)=>{

        const nextButton = event.target.closest(".carousel-next");

        const prevButton = event.target.closest(".carousel-prev");

        if(nextButton){

            moveCarousel(

                nextButton.closest(".post-card"),

                1

            );

        }

        if(prevButton){

            moveCarousel(

                prevButton.closest(".post-card"),

                -1

            );

        }

    });

}


/*====================================
        MOVE CAROUSEL
====================================*/

function moveCarousel(card,direction){

    if(!card) return;

    const images = card.querySelectorAll(".carousel-image");

    if(images.length===0) return;

    let current = Number(

        card.dataset.current || 0

    );

    images[current].classList.remove("active");

    current += direction;

    if(current<0){

        current = images.length-1;

    }

    if(current>=images.length){

        current = 0;

    }

    images[current].classList.add("active");

    card.dataset.current = current;

    updateCarouselIndicator(card,current);

}


/*====================================
        INDICATOR
====================================*/

function updateCarouselIndicator(card,index){

    const indicator = card.querySelector(".carousel-indicator");

    if(!indicator) return;

    indicator.textContent =

    (index+1)+" / "+card.querySelectorAll(".carousel-image").length;

}


/*====================================
        TOUCH PLACEHOLDER
====================================*/

function initializeSwipe(){

    console.log(

        "Swipe Support Ready"

    );

}


/*====================================
        FUTURE VIDEO SUPPORT
====================================*/

// Image

// Video

// GIF

// Live Photo

// 360°

/*==================================================
                TRYIXA FEED MODULE
                Part 6 (Final)
==================================================*/


/*====================================
            LOCAL STORAGE
====================================*/

const FeedStorage = {

    save(){

        localStorage.setItem(

            "tryixaFeed",

            JSON.stringify(feedPosts)

        );

    },

    load(){

        const data = localStorage.getItem(

            "tryixaFeed"

        );

        if(!data) return;

        try{

            const posts = JSON.parse(data);

            feedPosts.length = 0;

            posts.forEach(post=>feedPosts.push(post));

        }

        catch(error){

            console.error(error);

        }

    }

};


/*====================================
            FEED API
====================================*/

const FeedAPI = {

    async getPosts(){

        console.log(

            "Future API : Load Posts"

        );

    },

    async createPost(data){

        console.log(

            "Future API : Create Post",

            data

        );

    },

    async deletePost(id){

        console.log(

            "Future API : Delete",

            id

        );

    }

};


/*====================================
        CREATE NEW POST
====================================*/

function addFeedPost(post){

    feedPosts.unshift(post);

    loadFeedModule();

}


/*====================================
        REMOVE POST
====================================*/

function removeFeedPost(id){

    const index = feedPosts.findIndex(

        post=>post.id===id

    );

    if(index!==-1){

        feedPosts.splice(index,1);

        loadFeedModule();

    }

}


/*====================================
        REFRESH FEED
====================================*/

function refreshFeed(){

    loadFeedModule();

}


/*====================================
        FUTURE FEATURES
====================================*/

// AI Generated Posts

// AI Caption

// AI Hashtags

// AI Translate

// Scheduled Posts

// Poll Posts

// Collaborative Posts

// Music Posts

// Product Tags

// Shopping Posts

// Monetization

// Sponsored Posts

// Insights

// Analytics

// Verification

// Cloudflare Images

// Firebase

// Tryixa Backend API



/*====================================
            EXPORT
====================================*/

window.TryixaFeed = {

    initializeFeed,

    loadFeedModule,

    refreshFeed,

    addFeedPost,

    removeFeedPost,

    FeedStorage,

    FeedAPI

};


console.log("Feed Module Loaded");
