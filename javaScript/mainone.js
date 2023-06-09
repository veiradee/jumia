let mouseOne={
    Image:"images/G-wolves.png",
    name:"G-wolves",
    price:"Ksh 649",
    Original:"Ksh 800",
    itemId:"M001"
}
let mouseTwo={
    Image:"images/GamesRadar.png",
    name:"GamesRadar",
    price:"Ksh 1500",
    Original:"Ksh 1900",
    itemId:"M002"
}
let mouseThree={
    Image:"images/HyperX.png",
    name:"HyperX",
    price:"Ksh 850",
    Original:"Ksh 930",
    itemId:"M003"
}
let mouseFour={
    Image:"images/IGN.png",
    name:"IGN",
    price:"Ksh 3450",
    Original:"Ksh 3600",
    itemId:"M004"
}
let mouseFive={
    Image:"images/logitech-fb.png",
    name:"logitech-fb",
    price:"Ksh 17499",
    Original:"Ksh 18000",
    itemId:"M005"
}
let mouseSix={
    Image:"images/PCMag.png",
    name:"PCMag",
    price:"Ksh 12000",
    Original:"Ksh 13500",
    itemId:"M006"
}

//mouseOne
document.getElementById("mouse1").src= mouseOne.Image;
document.getElementById("name1").innerText= mouseOne.name;
document.getElementById("price1").innerText= mouseOne.price;
document.getElementById("original1").innerText= mouseOne.Original;

//mouseTwo
document.getElementById("mouse2").src= mouseTwo.Image;
document.getElementById("name2").innerText= mouseTwo.name;
document.getElementById("price2").innerText= mouseTwo.price;
document.getElementById("original2").innerText= mouseTwo.Original;

//mouseThree
document.getElementById("mouse3").src= mouseThree.Image;
document.getElementById("name3").innerText= mouseThree.name;
document.getElementById("price3").innerText= mouseThree.price;
document.getElementById("original3").innerText= mouseThree.Original;

//mouseFour
document.getElementById("mouse4").src= mouseFour.Image;
document.getElementById("name4").innerText= mouseFour.name;
document.getElementById("price4").innerText= mouseFour.price;
document.getElementById("original4").innerText= mouseFour.Original;

//mouseFive
document.getElementById("mouse5").src= mouseFive.Image;
document.getElementById("name5").innerText= mouseFive.name;
document.getElementById("price5").innerText= mouseFive.price;
document.getElementById("original5").innerText= mouseFive.Original;

//mouseSix
document.getElementById("mouse6").src= mouseSix.Image;
document.getElementById("name6").innerText= mouseSix.name;
document.getElementById("price6").innerText= mouseSix.price;
document.getElementById("original6").innerText= mouseSix.Original;

document.getElementById("mouseOne").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseOne.itemId;
}

document.getElementById("mouseTwo").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseTwo.itemId;
}

document.getElementById("mouseThree").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseThree.itemId;
}

document.getElementById("mouseFour").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseFour.itemId;
}

document.getElementById("mouseFive").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseFive.itemId;
}

document.getElementById("mouseSix").onclick= function(){
    window.location.href= "selectone.html"+ "?" +mouseSix.itemId;
}