mouseOne={
    Image:"images/G-wolves.png",
    name:"G-wolves",
    price:"Ksh 649",
    Original:"Ksh 800",
    itemId:"M001"
}
mouseTwo={
    Image:"images/GamesRadar.png",
    name:"GamesRadar",
    price:"Ksh 1500",
    Original:"Ksh 1900",
    itemId:"M002"
}
mouseThree={
    Image:"images/HyperX.png",
    name:"HyperX",
    price:"Ksh 850",
    Original:"Ksh 930",
    itemId:"M003"
}
mouseFour={
    Image:"images/IGN.png",
    name:"IGN",
    price:"Ksh 3450",
    Original:"Ksh 3600",
    itemId:"M004"
}
mouseFive={
    Image:"images/logitech-fb.png",
    name:"logitech-fb",
    price:"Ksh 17499",
    Original:"Ksh 18000",
    itemId:"M005"
}
mouseSix={
    Image:"images/PCMag.png",
    name:"PCMag",
    price:"Ksh 12000",
    Original:"Ksh 13500",
    itemId:"M006"
}
var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1);
console.log(selectedItem)
if(selectedItem ==mouseOne.itemId){
    document.getElementById("mouse1").src=mouseOne.Image;
    document.getElementById("name1").innerText =mouseOne.name;
    document.getElementById("price1").innerText =mouseOne.price;
    document.getElementById("original1").innerText =mouseOne.original;
    var cost = mouseOne.price
    qty(cost)
}
else if (selectedItem==mouseTwo.itemId){
    document.getElementById("mouse1").src=mouseTwo.Image;
    document.getElementById("name1").innerText =mousePhoneTwo.name;
    document.getElementById("price1").innerText =mouseTwo.price;
    document.getElementById("original1").innerText =mouseTwo.original;
    var cost = mouseTwo.price
    qty(cost)
}
else if (selectedItem==mouseThree.itemId){
    document.getElementById("mouse1").src=mouseThree.Image;
    document.getElementById("name1").innerText =mouseThree.name;
    document.getElementById("price1").innerText =mouseThree.price;
    document.getElementById("original1").innerText =mouseThree.original;
    var cost= mouseThree.price
    qty(cost)
}
else if (selectedItem==mouseFour.itemId){
    document.getElementById("mouse1").src=mouseFour.Image;
    document.getElementById("name1").innerText =mouseFour.name;
    document.getElementById("price1").innerText =mouseFour.price;
    document.getElementById("original1").innerText =mouseFour.original;
    var cost = mouseFour.price
    qty(cost)
}
else if (selectedItem==mouseFive.itemId){
    document.getElementById("mouse1").src=mouseFive.Image;
    document.getElementById("name1").innerText =mouseFive.name;
    document.getElementById("price1").innerText =mouseFive.price;
    document.getElementById("original1").innerText =mouseFive.original;
    var cost = mouseFive.price
    qty(cost)
}
else if (selectedItem==mouseSix.itemId){
    document.getElementById("mouse1").src=mouseSix.Image;
    document.getElementById("name1").innerText =mouseSix.name;
    document.getElementById("price1").innerText =mouseSix.price;
    document.getElementById("original1").innerText =mouseSix.original;
    var cost = mouseSix.price
    qty(cost)
}

function place(total){
    document.getElementById("location").onchange= function(){
        var nairobi =500
        var kisumu = 1000
        var mombasa = 1500
        var place= document.getElementById("location").value;
        if (place == "nairobi"){
            document.getElementById("cost").innerText = "Total:" + (total+nairobi)
            
        }
        else if(place == "kisumu"){
            document.getElementById("cost").innerText = "Total:" + (total+kisumu)
        }
        else if(place == "mombasa"){
            document.getElementById("cost").innerText = "Total:" + (total+mombasa)
        }
    }
}


