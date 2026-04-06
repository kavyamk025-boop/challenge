// // import { useState } from "react"

// import { use } from "react";
import { useState } from "react";

// // const { useState } = require("react");

// // function app(){
// //    const [c,setc]=useState(0)
// //     return(
// //        <>
// //         <div>{c}</div>
// //         <button onClick={()=>setc(c+2)}> increse</button>
// //         <button onClick={()=>setc(c-3)}>decrease</button>

// //         </>
// //     );
// // }
// // export default app
// import React from "react";
// import { useState } from "react";
// function App(){
//   const [num,setnum]=useState("")
//     const [res,setres]=useState("")

//     function evenodd(num){
//       if(num%2==0){
//         return True
//       }
//       else{
//         return False
//       }
//     }
//     return (
//       <>
//       <h1>lets check even or not </h1>
//     <input value={num} type="number" placeholder="enter the number" onChange={(e)=>setnum(e.target.value)}/>
//     <button onClick={()=>setres(evenodd(num))}>check</button>
// <h2>{res?"even":"odd"}</h2>
//       </>
//     );
  
// }
// export default App;
// import { useState } from "react";
// function App(){
//     const[Count,setCount]=useState(0)  
//   return(
//   <>
//       <h1>{Count}</h1>
//         <button onClick={()=>setCount(Count+1)}>increase</button>
//         </>
//     );
// }
// export default App;

// import { useState } from "react";
// function App(){
//     const [Inp,setInp]=useState("")
//     return(
//         <>
//         <input type="text" name="" id="" value={Inp} onChange={(e)=>setInp(e.target.value)} />
// <h1>{Inp}</h1>
//         </>
//     )
// };
// // export default App;
// import { useState } from "react";

function App() {
  const [Inp, setInp] = useState("");
  const [Submit,setSubmit]=useState("")
const[Em,setEm]=useState("")
const Handle=()=>{
        setSubmit(Inp);
    }

  return (
    <>

    
      <input
        type="text"
        value={Inp}
        placeholder="Enter Your Sweet Name"
        onChange={(e) => setInp(e.target.value)}
      />

<input type="text" name="" id="" value={Em} onChange={(e)=>setEm(e.target.value)} />

<button onClick={Handle}>submit</button>
      <h1>{Submit}</h1>
      <h2>{Em}</h2>
    </>
  );
}

export default App;