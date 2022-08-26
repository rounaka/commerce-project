var btn_plus=document.querySelectorAll(".plus")

for (let i = 0; i < btn_plus.length; i++) {

    btn_plus[i].addEventListener('click',inc)
}

function inc(e) {
    var cible=e.target
    var par=cible.parentElement
    var parP=par.querySelector('p')
    var counter=Number(parP.innerHTML)

    counter++
    parP.innerHTML=counter
    var tr=par.parentElement.parentElement
    var pu=Number(tr.querySelector(".unitPrice").innerHTML)
    var total=counter*pu
    tr.querySelector(".price").innerHTML=total
    som()
}

var btn_minus=document.querySelectorAll(".minus")

for (let j = 0; j < btn_minus.length; j++) {
    btn_minus[j].addEventListener('click',tnk)

}

function tnk(s) {
   
    var cible=s.target
    var par=cible.parentElement
    var parP=par.querySelector('p')  
    var counter=Number(parP.innerHTML)
    counter--
     
    if(counter>=0){
        parP.innerHTML=counter
        var tr=par.parentElement.parentElement
        var pu=Number(tr.querySelector(".unitPrice").innerHTML)
        var total=counter*pu
        tr.querySelector(".price").innerHTML=total
        som()
    }
  

}
 
var heart=document.querySelectorAll(".like")

for (let k = 0; k < heart.length; k++) {
    
    heart[k].addEventListener("click",pnk)
    
}

function pnk(p) {
    var cible=p.target
    
    if (cible.style.color!=="red") {

        cible.style.color="red"
    }
    else{
        cible.style.color="#424242"
    }
}
var remv=document.querySelectorAll(".delete")

for (let r = 0; r < remv.length; r++) {
    
remv[r].addEventListener("click",rem)
    
}
function rem(r) {
var cible=r.target
var tr=cible.parentElement.parentElement.parentElement.parentElement
tr.querySelector(".price").innerHTML=0
som()
tr.remove()
}
var price_total=document.querySelectorAll(".price")
function som() {
    var sum = 0
    for (let i  = 0; i < price_total.length; i++) {
        
        sum=sum+Number(price_total[i].innerHTML)
        document.getElementById("total").innerHTML=sum
        
    }

}
