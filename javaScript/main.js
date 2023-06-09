let PhoneOne = {
    Image:"images/iphone11.png",
    name:"iphone11",
    price:"Ksh 80000",
    original:"Ksh 82000",
    itemId: "B001"
}
let PhoneTwo = {
    Image: "images/iphone12.png",
    name: "iphone12",
    price:"Ksh 90000",
    original:"Ksh 95499",
    itemId:"B002"
}
let PhoneThree = {
    Image: "images/iphone13.png",
    name:"Iphone13",
    price:"Ksh 96000",
    original:"Ksh 97999",
    itemId:"B003"
}
let PhoneFour ={
    Image:"images/iphone14.png",
    name:"iphone14",
    price:"Ksh 182000",
    original:"Ksh 184000",
    itemId:"B004"
}

// PhoneOne
document.getElementById("phone1").src= PhoneOne.Image;
document.getElementById("name1").innerText=PhoneOne.name;
document.getElementById("price1").innerText=PhoneOne.price;
document.getElementById("original1").innerText=PhoneOne.original;

// PhoneTwo
document.getElementById("phone2").src= PhoneTwo.Image;
document.getElementById("name2").innerText=PhoneTwo.name;
document.getElementById("price2").innerText=PhoneTwo.price;
document.getElementById("original2").innerText=PhoneTwo.original;

// PhoneThree
document.getElementById("phone3").src=PhoneThree.Image;
document.getElementById("name3").innerText=PhoneThree.name;
document.getElementById("price3").innerText=PhoneThree.price;
document.getElementById("original3").innerText=PhoneThree.original;

// PhoneFour
document.getElementById("phone4").src=PhoneFour.Image;
document.getElementById("name4").innerText=PhoneFour.name;
document.getElementById("price4").innerText=PhoneFour.price;
document.getElementById("original4").innerText=PhoneFour.original;

document.getElementById("phoneOne").onclick= function(){
    window.location.href= "select.html"+ "?" +PhoneOne.itemId;
};

document.getElementById("phoneTwo").onclick= function(){
    window.location.href= "select.html"+ "?" +PhoneTwo.itemId;
};

document.getElementById("phoneThree").onclick= function(){
    window.location.href= "select.html"+ "?" +PhoneThree.itemId;
};

document.getElementById("phoneFour").onclick= function(){
    window.location.href= "select.html"+ "?" + PhoneFour.itemId;
}

