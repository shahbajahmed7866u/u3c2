// On clicking remove button the item should be removed from DOM as well as localstorage.
var coffeeBucketArr = JSON.parse(localStorage.getItem("coffee"))

var total = 0
showBucket(coffeeBucketArr)


function showBucket(coffeeBucketArr){
coffeeBucketArr.forEach(function(el,i) {
total+=el.price
document.querySelector("#total_amount").innerText=total
var div = document.createElement("div")
var img = document.createElement("img")
img.src=el.image
var title = document.createElement("h2")
title.innerText=el.title
var price = document.createElement("p")
price.innerText=el.price
var btn = document.createElement("button")
btn.innerText="Remove Item"
btn.setAttribute("id","remove_coffee")
btn.addEventListener("click",function(){
    
    deleteCoffee(el,i)
    
})
div.append(img,title,price,btn)
document.querySelector("#bucket").append(div)
    
});

}

function deleteCoffee(el,i){
coffeeBucketArr.splice(i,1)
// console.log(coffeeBucketArr)
localStorage.setItem("coffee",JSON.stringify(coffeeBucketArr))
var newCoffeeBucketArr = JSON.parse(localStorage.getItem("coffee"))
document.querySelector("#bucket").innerHTML=""
showBucket(newCoffeeBucketArr)
window.location.reload()
}


document.querySelector("#confirm_checkout").addEventListener("click",function(){
    window.location.href="checkout.html"
})