import React from "react"
import { useContext } from "react"
import { Mycontext } from "./Context"
import { useState } from "react"

function Mess() {
    const { name } = useContext(Mycontext)
    const[a,b]=useState()
    console.log(name)
    const now = new Date();
     const localTime = now.toLocaleTimeString();
     const localdate=now.toLocaleDateString();
    return (<>
<div className=" w-[600px] h-[400px] border-black border-2 absolute top-[60px] left-[370px] bg-blue-100">

</div>

        <div class="form-floating mb-3 absolute top-[470px] w-[500px] left-[370px]">
            <input type="email" value={a} onClick={(e)=>{b(e.target.value)}} class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Write Message</label>
        </div>


        <button type="button" 
        onClick={async()=>{
            const share={name:name,message:a,time:localTime,date:localdate}

            const response = await fetch('https://node-mongo-pz0o.onrender.com/fetch', {
                method: 'POST',
                body: JSON.stringify(share),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone)
            




        }}
        class="btn btn-info absolute top-[475px] w-[100px] h-[50px] left-[880px]">Send</button>

    </>)
}
export default Mess