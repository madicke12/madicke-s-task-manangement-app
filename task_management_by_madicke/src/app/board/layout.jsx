import Sidenav from "./sidenav";
const layout = (props) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:flex-none md:w-64 hidden md:block py-3">
        <Sidenav />
      </div>
      <div className="w-full h-full ">
        <div className="h-full md:p-3">
          {props.children}
          {props.newboard}
          
          </div>
      </div>
    </div>
  );
};

export default layout;
