const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("span").innerText
        addCart(productImg, productName, productPrice)
    }})


})

function addCart(productImg, productName, productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
       var productT = document.querySelectorAll(".title")
       if(productT[i].innerHTML == productName){
         //  document.getElementById("warning").innerHTML = '<button>BUY NOW!!</button>';
          alert("THIS PRODUCT ALREADY IN YOUR BAG")
          return
       }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="'+productImg+'" alt="" height="90px" width="70px"><span class="title">'+productName+'</span></td> <td><p><span class="prices">'+productPrice+'</span>$<sup></sup></p></td><td><input style="width : 40px; outline : none; border-radius: 5px; text-align:center" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Delete</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

function carttotal(){
   var cartItem = document.querySelectorAll("tbody tr")
   var totalC = 0
   for(var i=0; i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input").value
      var productPrice = cartItem[i].querySelector(".prices").innerHTML
      totalA = inputValue*productPrice
      totalC = totalC + totalA
   }  
   var cartTotalA = document.querySelector(".price-total span") 
   var cartPrice = document.querySelector(".cart-icon span")
   cartTotalA.innerHTML = totalC
   cartPrice.innerHTML = totalC
   inputchange()
}

function deleteCart(){
   var cartItem = document.querySelectorAll("tbody tr")
   for(var i=0; i<cartItem.length;i++){
      var productT = document.querySelectorAll(".cart-delete")
      productT[i].addEventListener("click",function(event){
         var cartDelete = event.target
         var cartitemR = cartDelete.parentElement.parentElement
         cartitemR.remove()
         carttotal()
      })
   }
}

function inputchange(){
   var cartItem = document.querySelectorAll("tbody tr")
   for(var i=0; i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
     inputValue.addEventListener("change",function(){
        carttotal()
     })
   }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
   document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
   document.querySelector(".cart").style.right = "-100%"
})