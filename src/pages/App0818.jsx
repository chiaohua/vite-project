import { useState } from 'react'

function MyComponent(){
 count [counts,setCounts]=useState(0);
}


const App0818 = () => {
    //let counts=0;
    //count [counts,setCounts]=useState(0);

  return (
    <div>
        <button id="btn1" onClick={()=>{
         setCounts(counts + 1);
          console.log(counts);
;        }}>點:{counts}</button>
    </div>
  )
}

export default App0818