// import { useState } from "react"

// const { useState } = require("react");

// function app(){
//    const [c,setc]=useState(0)
//     return(
//        <>
//         <div>{c}</div>
//         <button onClick={()=>setc(c+2)}> increse</button>
//         <button onClick={()=>setc(c-3)}>decrease</button>

//         </>
//     );
// }
// export default app
import React from "react";
import { useState } from "react";
function App(){
  const [num,setnum]=useState("")
    const [res,setres]=useState("")

    function evenodd(num){
      if(num%2==0){
        return True
      }
      else{
        return False
      }
    }
    return (
      <>
      <h1>lets check even or not </h1>
    <input value={num} type="number" placeholder="enter the number" onChange={(e)=>setnum(e.target.value)}/>
    <button onClick={()=>setres(evenodd(num))}>check</button>
<h2>{res?"even":"odd"}</h2>
      </>
    );
  
}
export default App;