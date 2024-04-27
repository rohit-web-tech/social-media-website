import {useNavigate} from "react-router-dom";

const ListItem = (props: {bg:string,text:string,isActive:boolean,endPoint:string}) => {
    const navigate = useNavigate();
    const {bg,text,isActive,endPoint} = props ;
  return (
    <li onClick={()=>{
        navigate(endPoint);
    }} 
    className={`w-[100%] hover:cursor-pointer hover:text-[--primary-color] tracking-[2px] flex justify-start items-center gap-[25px] ${isActive&&"bg-[#0C00FF]"} p-2 rounded-[10px]`}
    >
              <img src={bg} alt="" className="h-[25px] w-[25px] fill-[blue]"/> 
              <p className="text-white text-[.8rem] hover:text-[--primary-color]">{text}</p>
    </li>
  )
}

export default ListItem
