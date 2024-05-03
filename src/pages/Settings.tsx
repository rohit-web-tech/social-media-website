const Settings = (props{setMode:()=>string,mode:string}) => {
  return (
    <div className='flex flex-col w-[60%] max-w-[1200px] mt-14'>
    <h1 className="text-[--main-color] text-2xl">Settings:</h1>
    <div className="flex flex-col gap-2 mt-5 hover:cursor-pointer">
      <div 
      className="flex flex-between items-center bg-[--sec-bg] rounded-[10px] w-100% h-[40px] border-[1px] border-[--border-color] border-solid"
      onClick={()=>{
        document.body.classList.toggle("dark");
        setMode(document.body.classList.contains("dark")?"dark":"light");
      }}
      >
        <p 
        className="pl-4 text-[--sec-color]"
        >{mode==="dark"?"Light Mode":"Dark Mode"}</p>
      </div>
    </div>
  </div>
  )
}

export default Settings
