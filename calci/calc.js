let btn=document.querySelectorAll(".button")
let inp=document.getElementById("inp")
btn.forEach(function(button){
    button.addEventListener("click",function(){
        const value=this.textContent.trim();
        if(value=="="){
            inp.value=eval(inp.value)
        }
        else if(value=="clear"){
            inp.value="0"
        }
        else{
            inp.value+=value
        }
    })

})