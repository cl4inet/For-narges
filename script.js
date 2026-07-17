
/* ===========================
   LOADING
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 1800);

});


/* ===========================
   PASSWORD
=========================== */

function checkPassword(){

    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    if(password === "7886"){

        document.getElementById("password-page").style.display = "none";

        document.getElementById("website").style.display = "block";

    }

    else{

        error.innerHTML = "Wrong Password";

        error.style.opacity = "1";

        setTimeout(()=>{

            error.innerHTML="";

        },2000);

    }

}


/* ===========================
ENTER STORY
=========================== */

const startButton = document.getElementById("startStory");

if(startButton){

startButton.addEventListener("click",()=>{

document.getElementById("intro").scrollIntoView({

behavior:"smooth"

});

});

}


/* ===========================
MAKE A WISH
=========================== */

const wishButton = document.getElementById("wishButton");

if(wishButton){

wishButton.addEventListener("click",()=>{

alert("Happy Birthday ");

});

}
/* ===========================
   SCROLL ANIMATIONS
=========================== */

const sections = document.querySelectorAll(
"#intro, #memory-one, #music-section, #letter, #memory-two, #birthday, #ending"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="all .9s ease";

    observer.observe(section);

});


/* ===========================
   PLAY MUSIC
=========================== */

const playButton = document.getElementById("playMusic");

let music;

if(playButton){

    music = new Audio("assets/music/angel.mp3");

    music.loop = true;

    playButton.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            playButton.innerHTML="Pause Music";

        }

        else{

            music.pause();

            playButton.innerHTML="Play Music";

        }

    });

}


/* ===========================
   IMAGE HOVER EFFECT
=========================== */

document.querySelectorAll(".photo-card img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(100%)";

    });

});
/* ===========================
   MAKE A WISH
=========================== */

const flame = document.querySelector(".flame");
const cake = document.querySelector(".cake");

if(wishButton){

    wishButton.addEventListener("click",()=>{

        if(flame){

            flame.style.opacity="0";
            flame.style.transform="translateX(-50%) scale(.3)";
            flame.style.transition=".5s";

        }

        wishButton.innerHTML="Wish Made ❤️";

        createConfetti();

        setTimeout(()=>{

            document.getElementById("ending").scrollIntoView({

                behavior:"smooth"

            });

        },1800);

    });

}


/* ===========================
   CONFETTI
=========================== */

function createConfetti(){

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDuration=(2+Math.random()*3)+"s";

        piece.style.opacity=Math.random();

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}


/* ===========================
   TYPE EFFECT
=========================== */

const letter=document.getElementById("letterText");

if(letter){

letter.style.opacity="0";

const letterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

letter.style.transition="opacity 2s";

letter.style.opacity="1";

}

});

});

letterObserver.observe(letter);

}


/* ===========================
   PARALLAX
=========================== */

window.addEventListener("scroll",()=>{

const stars=document.querySelector(".stars");

if(stars){

stars.style.transform=
`translateY(${window.scrollY*0.2}px)`;

}

});


/* ===========================
   END
=========================== */

console.log("Made with ❤️ by Parla");
