import Sidenav from "./sidenav";

const layout = (props) => {
  return (
  
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden dark:bg-zinc-700">
      <div className="w-full md:flex-none md:w-64 hidden md:block py-3 bg-zinc-950">
        <Sidenav />
      </div>
      <div className="w-full h-full ">
        <div className="h-full md:p-3 dark:bg-zinc-900">
          {props.children}      
          </div>
      </div>
    </div>
    
  );
};

export default layout;
