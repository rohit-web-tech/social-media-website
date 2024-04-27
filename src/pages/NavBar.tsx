import logo from '../assets/chit-chat-high-resolution-logo-transparent (1).png' ;
import profile from "../assets/delicious-3d-burger-with-modern-smartphone_23-2150914629.jpg" ;
import ListItem from '../components/ListItem';
import home from '../assets/home.svg'
import search from '../assets/search.svg'
import notice from '../assets/notice.svg'
import saved from '../assets/saved.svg'
import createPost from '../assets/createpost.svg'
import live from '../assets/live.svg'
import logout from '../assets/logout.svg'
import settings from '../assets/settings.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const navigate = useNavigate();
    const [activePage,setActivePage] = useState("") ;
    const location = useLocation()
    useEffect(()=>{
        setActivePage(location.pathname);
    },[location]);

    const checkActive=(endPoint:string):boolean=>{
        if(activePage===endPoint)
          return true ;
        return false ; 
    }

  return (
    <div className="sm:flex hidden w-[270px] min-h-[700px] h-[100vh] bg-[--sec-bg] flex-col justify-around items-center relative">
        <div className="flex flex-col gap-4">
          <img 
          src={logo} 
          alt="Chit Chat" 
          className="h-[62px] w-[202px] hover:cursor-pointer"
          onClick={()=>{
            navigate("/");
          }} 
          />
          <div 
          className="flex gap-2 justify-center items-center text-white hover:cursor-pointer" 
          onClick={()=>{
            navigate("/profile");
          }}
          >
            <img src={profile} alt="profile" className="h-[50px] w-[50px] rounded-[50%]" />
            <div>
              <p className="font-semibold text-[.9rem] tracking-[1px]">Rohit Web Tech</p>
              <p className="text-[.6rem] text-[--sec-color]">rohitdogra0127@gmail.com</p>
            </div>
          </div>
        </div>
          <nav className='flex flex-col justify-center items-start relative w-[80%]'>
            <ul className='flex flex-col justify-center items-start relative w-[100%] gap-1'>
                <ListItem bg={home} text="Home" isActive={checkActive("/")} endPoint="/"/>
                <ListItem bg={search} text="Search" isActive={checkActive("/search")} endPoint="/search"/>
                <ListItem bg={notice} text="Notification" isActive={checkActive("/notification")} endPoint="/notification"/>
                <ListItem bg={saved} text="Saved" isActive={checkActive("/saved")} endPoint="/saved"/>
                <ListItem bg={createPost} text="Create Post" isActive={checkActive("/createpost")} endPoint="/createpost"/>
                <ListItem bg={live} text="Live Stream" isActive={checkActive("/live")} endPoint="/live"/>
            </ul>
          </nav>
          <nav className='flex flex-col justify-center items-start relative w-[80%]'>
            <ul className='flex flex-col justify-center items-start relative w-[100%] gap-1'>
                <ListItem bg={logout} text="Log Out" isActive={checkActive("/logout")} endPoint="/logout"/>
                <ListItem bg={settings} text="Seetings" isActive={checkActive("/settings")} endPoint="/settings"/>
            </ul>
          </nav>
      </div>
  )
}

export default Navbar
