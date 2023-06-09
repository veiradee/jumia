 PhoneOne = {
    Image:"images/iphone11.png",
    name:"iphone11",
    price:80000,
    original:82000,
    itemId: "B001"
}
 PhoneTwo = {
    Image: "images/iphone12.png",
    name: "iphone12",
    price:90000,
    original:95499,
    itemId:"B002"
}
 PhoneThree = {
    Image: "images/iphone13.png",
    name:"Iphone13",
    price:96000,
    original: 97999,
    itemId:"B003"
}
 PhoneFour ={
    Image:"images/iphone14.png",
    name:"iphone14",
    price:"Ksh 182000",
    original:"Ksh 184000",
    itemId:"B004"
}

var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1);
console.log(selectedItem)
if(selectedItem ==PhoneOne.itemId){
    document.getElementById("phone1").src=PhoneOne.Image;
    document.getElementById("name1").innerText =PhoneOne.name;
    document.getElementById("price1").innerText =PhoneOne.price;
    document.getElementById("original1").innerText =PhoneOne.original;
    var cost = PhoneOne.price
    qty(cost)
}
else if (selectedItem==PhoneTwo.itemId){
    document.getElementById("phone1").src=PhoneTwo.Image;
    document.getElementById("name1").innerText =PhoneTwo.name;
    document.getElementById("price1").innerText =PhoneTwo.price;
    document.getElementById("original1").innerText =PhoneTwo.original;
    var cost = PhoneTwo.price
    qty(cost)
}
else if (selectedItem==PhoneThree.itemId){
    document.getElementById("phone1").src=PhoneThree.Image;
    document.getElementById("name1").innerText =PhoneThree.name;
    document.getElementById("price1").innerText =PhoneThree.price;
    document.getElementById("original1").innerText =PhoneThree.original;
    var cost= PhoneThree.price
    qty(cost)
}
else if (selectedItem==PhoneFour.itemId){
    document.getElementById("phone1").src=PhoneFour.Image;
    document.getElementById("name1").innerText =PhoneFour.name;
    document.getElementById("price1").innerText =PhoneFour.price;
    document.getElementById("original1").innerText =PhoneFour.original;
    var cost = PhoneFour.price
    qty(cost)
}

function place(total){
    document.getElementById("location").onchange= function(){
        var Karen =400
        var Westlands = 200
        var CBD = 100
        var place= document.getElementById("location").value;
        if (place == "Karen"){
            document.getElementById("cost").innerText = "Total:" + (total+Karen)
            
        }
        else if(place == "Westlands"){
            document.getElementById("cost").innerText = "Total:" + (total+Westlands)
        }
        else if(place == "CBD"){
            document.getElementById("cost").innerText = "Total:" + (total+CBD)
        }
    }
}