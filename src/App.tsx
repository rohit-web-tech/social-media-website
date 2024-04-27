import { BrowserRouter , Routes , Route } from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./pages/NavBar"
import Home from "./pages/Home"
import { useState } from "react"
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
  const [auth,setAuth] = useState(true);
  return (
    <BrowserRouter>
    <div className="flex justify-between">
    {auth&&<Navbar/>}
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/live" element={<Live/>}/>
        <Route path="/settings" element={<Settings/>}/>
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
