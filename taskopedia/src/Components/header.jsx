import logo from "../Images/react.png"
function MainHeader() {
    return ( 
    <div style={{display: "flex"}}>
      <img src={logo} width={100} height={100}></img>
      <h1 className="text-primary py-4 px-3">React Course</h1>;
    </div>
    )
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  function SubHeader() {
    return <h1 style={subHeaderStyle}>Exciting Course</h1>;
  }
  
  function Header() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
      </div>
    );
  }

  export default Header;