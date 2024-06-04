import React from "react"
import { useContext } from "react"
import { Mycontext } from "./Context"
import { useState } from "react"
import { useEffect } from "react"
import './mess.css'
import { useRef } from "react"
import { FiRefreshCcw } from "react-icons/fi";
import { IoSend } from "react-icons/io5";



function Mess() {
    const { name } = useContext(Mycontext)
    const[c,d]=useState()
    console.log(name)
    const now = new Date();
     const localTime = now.toLocaleTimeString();
     const localdate=now.toLocaleDateString();
const[x,y]=useState([])

const handleKeyPress = (event) => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      document.getElementById('myButton').click();
    }
  };

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

const chatBoxRef = useRef(null);

useEffect(() => {
    // Scroll to the bottom of the chat box when the component mounts or messages update
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [x]);

console.log(x)

    return (<>
    
    <span className="text-4xl sm:text-6xl font-bold absolute left-[38%] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Guchi Puchi</span>
      <div ref={chatBoxRef}   class="w-[600px] h-[400px] absolute top-[60px] left-[370px] bg-white rounded-lg shadow-xl overflow-y-auto custom-scrollbar p-4">
    <div  class="space-y-4">
       {/* <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">asjndfjkanfs</div> */}
{x.map((i)=>(<>
    <div class="bg-blue-100 flex h-[auto] flex-row p-3 gap-5 rounded-lg shadow-md">
            <p class=" text-blue-900 text-xl font-semibold translate-y-1">{i.bywhom}</p>
            <p className=" text-blue-900 w-[300px] writing-mode-vertical-rl text-orientation-mixed break-words h-[auto] text-lg font-semibold translate-y-1">{i.message}</p>
            <div className=" flex flex-col gap-0 translate-y-[-10px] scale-[0.7]">
            <p class=" text-blue-900 text-sm font-semibold ">{i.time}</p>
            <p class=" text-blue-900 text-sm font-semibold translate-y-[-10px]">{i.date}</p>
            </div>
    </div>     
        </>
))}

     
      </div>
      </div>



        <div class="form-floating shadow-lg mb-3 absolute top-[470px] w-[500px] left-[370px]">
            <input onKeyDown={handleKeyPress} type="text" value={c} onChange={(e)=>{d(e.target.value)}} class="form-control"   />
            <label for="floatingInput">Write Message</label>
        </div>
        


        <button type="button" id="myButton"
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
        class="btn shadow-lg btn-info absolute top-[475px] w-[100px] h-[50px] left-[880px]"><IoSend className=" text-2xl translate-x-6"/></button>

<button className="text-2xl absolute top-[470px] left-[1000px] bg-yellow-300 p-3 rounded-xl" onClick={()=>{location.reload()}}><FiRefreshCcw/></button>
    </>)
}
export default Mess