// Add the coffee to local storage with key "coffee"

var count=localStorage.getItem("count") || 0
var api=`https://masai-mock-api.herokuapp.com/coffee/menu`

// var c = localStorage.getItem("count")
// document.querySelector("#coffee_count").innerHTML=c
var arr = []
ectractt()

async function ectractt(){
try{
var bp= await fetch(api)
var ap = await bp.json()
arr = (ap.menu.data)
localStorage.setItem("coffe",JSON.stringify(arr))
}
catch(err){
    console.log(err)
}

}

var coffeArr = JSON.parse(localStorage.getItem("coffe"))

append(coffeArr)

function append(coffeArr){
coffeArr.forEach(function(el) {

    console.log(el)
var cont = document.createElement("div")
var img = document.createElement("img")
img.src=el.image
var title = document.createElement("h2")
title.innerText=el.title
var price = document.createElement("p")
price.innerText=el.price
var btn = document.createElement("button")
btn.innerText="Add to Bucket"
btn.addEventListener("click",function(){
    
    adToBag(el)

})
cont.append(img,title,price,btn)
document.querySelector("#menu").append(cont)
});




}
var bag = JSON.parse(localStorage.getItem("coffee"))|| []
var c = 0 || bag.length
document.querySelector("#coffee_count").innerHTML=c

function adToBag(elem){

    console.log("ajhadc")
    var obj = {
image:elem.image,
title:elem.title,
price:elem.price,
    }
bag.push(obj)

localStorage.setItem("coffee",JSON.stringify(bag))
window.location.reload()
}