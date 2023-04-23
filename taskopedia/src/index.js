import ReactDOM from "react-dom/client";
import Header from "./Components/header"
import Footer from "./Components/footer"
import Student from "./Components/students"
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
const studentList = [
  { name: "rodrigo", experience: 24},
  { name: "rapaz", experience: 32},
  { name: "rapariga", experience: 41},
  { name: "trmp", experience: 12},
  { name: "bidne", experience: 321},
  { name: "Fortnite", experience: 87}]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row"> Students Enrolled</div>
    <Student experience={2} name="Rodrigo Travessa" />
    <Student experience={5} name="Carlos Travessa" />
    <Student experience={7} name="Rosemeri Travessa" />
    {studentList.map((student, index) => {
      return (
        <Student key={index} name={student.name} experience={student.experience} />
      )
      
    })}
    <Footer />
  </div>
);
