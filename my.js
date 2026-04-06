let inp=document.getElementsByTagName("input")[0]
let h1=document.getElementsByTagName("h1")[0]
let btn=document.getElementsByTagName("button")[0]
btn.addEventListener("click",()=>{
    h1.innerHTML+=`hi ${inp.value}`
});