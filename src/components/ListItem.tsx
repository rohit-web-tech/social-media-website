import { useNavigate } from "react-router-dom";

const ListItem = (props: { bg: string, text: string, isActive: boolean, endPoint: string }) => {
  const navigate = useNavigate();
  const { bg, text, isActive, endPoint } = props;
  return (
    <li onClick={() => {
      navigate(endPoint);
    }}
      className={`w-[100%] hover:cursor-pointer hover:text-[--primary-color]
      tracking-[2px] flex justify-start items-center gap-[25px] 
      ${isActive && "bg-[--primary-color]"} p-2 rounded-[10px]`}
    >
      <img
        src={bg}
        alt=""
        className={`h-[25px] w-[25px] ${isActive ? text == "Home" ? "" : "active" : "non-active"}`}
      />
      <p
        className={`text-[--sec-color] ${isActive && "text-[--main-color] font-bold"} 
      text-[.9rem] hover:text-[--primary-color]`}
      >
        {text}
      </p>
    </li>
  )
}

export default ListItem