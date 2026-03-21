let btn=document.getElementById("btn")
let count=document.getElementById("count")
let c=0
btn.addEventListener("click",function(){
    c++;
    count.textContent=c

})