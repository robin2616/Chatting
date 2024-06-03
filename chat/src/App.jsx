import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, b] = useState()


  // useEffect(() => {
  //   const cartindb = async () => {

  //       const items = { password: a }

  //       const response = await fetch('https://e-commerce-z43x.vercel.app/cart', {
  //           method: 'POST',
  //           body: JSON.stringify(items),
  //           headers: { 'Content-Type': 'application/json' }
  //       })

  //       const findedone = await response.json()
  //       console.log(findedone)
  //       u(findedone)
  //   }})



  return (
    <>
    <input type="text" value={a} onChange={(e)=>{b(e.target.value)}} />
    <button onClick={async()=>{


const items = { password: a }

        const response = await fetch('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/Chatting', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
        })

        const findedone = await response.json()
        console.log(findedone)
   








        }}></button>
    </>
  )
}

export default App
