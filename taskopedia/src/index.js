import ReactDOM from "react-dom/client";
import "./CSS/style.css";

function MainBody() {

  const whatWeWillLearn = "ReactJS";
  const totalLectures = 3;

  return (
    <div>
      <p> In this course we will learn about {whatWeWillLearn} </p>
      <p> In this course we will lean {totalLectures} lectures </p>
      <div>
        Enter task : <input maxLength={5} readOnly={false}></input> 
      </div>
    </div>
  );
}

function MainHeader() {
  return <h1 className="text-primary">React Course</h1>;
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

function Students(){
  const fullName = "Rodrigo Travessa";
  const programmingExperience = 2;


  return (
    <div className="container p-4">
      <div className="row">
        Students Enrolled
      </div>
      <div className="row border">
        <div className="col-2"> <img src={`https://ui-avatars.com/api/?name=${fullName}`} className="w-100"></img></div>
        <div className="col-10"> {fullName} <br/>
        Programming Experience {programmingExperience} years</div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <p style={{ color: "white", backgroundColor: "black", padding: "10" }}>
      Happy Coding
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
