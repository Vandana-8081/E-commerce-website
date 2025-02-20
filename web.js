let card = document.querySelector(".trend");
let letter=document.querySelector(".letter");
// console.log(card);
let card2 = document.getElementById("trendSec");
let about=document.querySelector(".about");
let contact=document.querySelector(".contact");

//console.log(card2);
let blog = document.querySelector(".trends");
// console.log(blog);

let main_page = document.querySelector(".main");

// home function
function homes(){
    main_page.style.display = "flex";
    card.style.display="block"
    card2.style.display = "block"
    blog.style.display = "block";
    contact.style.display="none";
    letter.style.display="flex";
   

    document.getElementById("home").style.color = "rgb(16, 236, 163)";
    document.getElementById("shops").style.color = "black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contacts").style.color = "black";

}



//console.log(main_page);
function shops() {
    main_page.style.display = "none";
   card2.style.display ="block";
    card.style.display = "block";

    blog.style.display = "none";
    about.style.display="none";
    contact.style.display="none";
    letter.style.display="flex";

    
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "rgb(16, 236, 163)";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}




function blogs() {
    main_page.style.display = "none";
    card.style.display="none"
    card2.style.display = "none"
    blog.style.display = "block";
    about.style.display="none";
    contact.style.display="none";
    letter.style.display="flex";

    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color ="black";
    document.getElementById("blogs").style.color = "rgb(16, 236, 163)";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
 

function abouts(){
    main_page.style.display = "none";
    card.style.display="none"
    card2.style.display = "none"
    blog.style.display = "none";
    about.style.display="block";
    contact.style.display="none";
    letter.style.display="none";

    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color ="black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("about").style.color = "rgb(16, 236, 163)";
    document.getElementById("contact").style.color = "black";

}


function contacts(){
    main_page.style.display = "none";
    card.style.display="none"
    card2.style.display = "none"
    blog.style.display = "none";
    about.style.display="none";
    contact.style.display="block";
    letter.style.display="none";

    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color ="black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(16, 236, 163)";
}
//cart
function show(img){
    let newImg=document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;
    document.querySelector(".cart").style.display="flex";

    main_page.style.display = "none";
    card.style.display="none"
    card2.style.display = "none"
    blog.style.display = "none";
    about.style.display="none";
    contact.style.display="none";
    letter.style.display="none";
}
function addCart(){
    alert("Added To Cart");
    location.reload();
}