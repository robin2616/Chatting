import React from "react"
import { useContext } from "react"
import { Mycontext } from "./Context"
import { useState } from "react"
import { useEffect } from "react"
import './mess.css'
import { useRef } from "react"
import { FiRefreshCcw } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { messaging } from "./firebase"
import { getToken } from "firebase/messaging"


function Mess() {

  async function requestmess(){
    const permissions =await Notification.requestPermission();
    if(permissions==="granted"){
getToken(messaging,{
  vapidKey:"BBNTkFFOODTfgVHTLiRTec4XSnqgzbkGudmtMfeFkyn-K0m5Y_7VIB365IXA0SqXgJfZtRIsWpHZgnuiC1TyV8g"
})
console.log("token",token);
    }
    else if(permissions==="denied"){
      alert("permissions denied");
    }
  }

  useEffect(()=>{
    requestmess()
  },[])



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
    
    <span id="heading" className=" text-3xl w-[100vw] left-[13vw] fixed top-[-4vh] overflow-x-hidden overflow-y-hidden overflow-hidden flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Manya Robin</span>
      {/* <div ref={chatBoxRef} id="mainbox"   class=" fixed top-[20vh] left-[340px] w-[90vw] h-[40vh] bg-red-200 rounded-lg shadow-xl custom-scrollbar "> */}
      <div ref={chatBoxRef} className="w-[90vw] h-[80vh] fixed top-[7vh] left-[5vw] right-[5vw] bg-blue-100 rounded-lg overflow-scroll custom-scrollbar ">
    <div  class="space-y-4">
       <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
{x.map((i)=>(<>
    <div class="bg-blue-100  flex h-[auto] text-md flex-row p-3 gap-1 rounded-sm shadow-inner ">
            <p class=" text-red-600 text-md font-semibold relative translate-x-[-2vw] translate-y-[-1vh] top-0">{i.bywhom}</p>
            <p className=" text-blue-900 relative w-72 bg-black translate-x-[-12vw] translate-y-[1vh] m-1 writing-mode-vertical-rl text-orientation-mixed break-words h-[auto] text-lg font-semibold">{i.message}</p>
            <div className=" flex flex-col gap-0 relative left-[3vw] h-5 scale-[0.8]">
            <p class=" text-blue-900 text-sm font-semibold ">{i.time}</p>
            <p class=" text-blue-900 text-sm font-semibold translate-y-[-10px]">{i.date}</p>
            </div>
    </div>     
        </>
))}

     
      </div>
      </div>



        {/* <div id="inp" class="form-floating shadow-lg mb-3 absolute top-[470px] w-[500px] left-[370px]">
            <input onKeyDown={handleKeyPress} type="text" value={c} onChange={(e)=>{d(e.target.value)}} class="form-control"   />
            <label for="floatingInput">Write Message</label>
        </div> */}
        


        {/* <button type="button" id="myButton"
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

            




        }} */}
        {/* class="btn shadow-lg btn-info absolute top-[475px] w-[100px] h-[50px] left-[880px]"><IoSend className=" text-2xl translate-x-6"/></button>

<button id="refresh" className="text-2xl absolute top-[470px] left-[1000px] bg-yellow-300 p-3 rounded-xl" onClick={()=>{location.reload()}}><FiRefreshCcw/></button> */}
    </>)
}
export default Mess