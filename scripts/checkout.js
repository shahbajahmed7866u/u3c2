document.querySelector("#confirm").addEventListener("click",alertt)

function alertt(){

    // console.log("haha")
id = setInterval(function(){
    alert("0 seconds : Your order is accepted")
    clearInterval(id) 
// console.log(count,time)
},0)
id1 = setInterval(function(){
    alert("3 seconds : Your order is being Prepared")

    clearInterval(id1) 
// console.log(count,time)
},3000)
id2 = setInterval(function(){
    alert("8 seconds : Your order is being packed  ")
    
    clearInterval(id2) 
    // console.log(count,time)
},8000)
id3 = setInterval(function(){
    alert("10 seconds : Your order is out for delivery")
    
    clearInterval(id3) 
    // console.log(count,time)
},10000)
id4 = setInterval(function(){
    alert("12 seconds : Order delivered")
    
    clearInterval(id4) 
    // console.log(count,time)
},12000)


}

