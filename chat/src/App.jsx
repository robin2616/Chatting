import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home"
import Mess from "./Mess"
import { Ch } from "./Context"
function App() {
return(<>

<Ch>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/mess" element={<Mess/>}></Route>
</Routes>
</BrowserRouter>


</Ch>
   
    </>
  )
}

export default App
