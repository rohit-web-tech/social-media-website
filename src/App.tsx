import { BrowserRouter , Routes , Route } from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./pages/NavBar"
import Home from "./pages/Home"
import { useEffect, useState } from "react"
import MessageBar from "./pages/MessageBar"
import Search from "./pages/Search" ;
import Saved from "./pages/Saved"
import Notification from "./pages/Notification" ;
import Live from "./pages/Live"
import CreatePost from "./pages/CreatePost"
import Settings from "./pages/Settings"
import LogOut from "./pages/LogOut"
import ProfilePage from "./pages/ProfilePage"
import PageNotFound from "./pages/PageNotFound"

function App() {
  useEffect(()=>{
    setMode(document.body.classList.contains("dark")?"dark":"light")
  },[])
  const [mode,setMode] = useState(document.body.classList.contains("dark")?"dark":"light") ;
  const auth = true ;
  return (
    <BrowserRouter>
    <div className="flex justify-between w-[100%] relative">
    {auth&&<Navbar mode={mode}/>}
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/live" element={<Live/>}/>
        <Route path="/settings" element={<Settings mode={mode} setMode={setMode}/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    {auth&&<MessageBar/>}
    </div>
    </BrowserRouter>
  )
}

export default App
