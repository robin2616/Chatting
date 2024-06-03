import React from "react"
import { useContext } from "react"
import { Mycontext } from "./Context"
import { useState } from "react"
import { useEffect } from "react"

function Mess() {
    const { name } = useContext(Mycontext)
    const[c,d]=useState()
    console.log(name)
    const now = new Date();
     const localTime = now.toLocaleTimeString();
     const localdate=now.toLocaleDateString();
const[x,y]=useState([])

useEffect(()=>{
const showmess=async()=>{
    const response = await fetch('https://node-mongo-pz0o.onrender.com/showmess', {
                method: 'POST',
                body: JSON.stringify(),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            // console.log(findedone)
            y(findedone)
}
showmess();

},[])

console.log(x)

    return (<>
<div className=" w-[600px] h-[400px] overflow-scroll overflow-x-hidden border-black border-2 absolute top-[60px] left-[370px] bg-blue-100">
{x.map((i)=>(<>
     <div className=" flex flex-row gap-4 border-black border-2" >
        <span className="ml-10 mt-2">{i.bywhom}</span>
        <div className=" mt-2 w-[370px] writing-mode-vertical-rl text-orientation-mixed break-words h-[auto]">{i.message}</div>
       <div className=" flex flex-col">
        <span className=" scale-90">{i.time}</span>
        <span className="">{i.date}</span>
        </div>
    </div> 
    </>  
))}

</div>

        <div class="form-floating mb-3 absolute top-[470px] w-[500px] left-[370px]">
            <input type="text" value={c} onChange={(e)=>{d(e.target.value)}} class="form-control" id="floatingInput"  />
            <label for="floatingInput">Write Message</label>
        </div>
        


        <button type="button" 
        onClick={async()=>{
            const share={name:name,message:c,time:localTime,date:localdate}

            const response = await fetch('https://node-mongo-pz0o.onrender.com/mess', {
                method: 'POST',
                body: JSON.stringify(share),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone)
            location.reload()

            




        }}
        class="btn btn-info absolute top-[475px] w-[100px] h-[50px] left-[880px]">Send</button>

    </>)
}
export default Mess