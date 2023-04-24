import Student from "./Student";
import StudentReview from "./StudentReview";

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
      <div className="row"> Students Enrolled</div>
      <Student experience={2} name="Rodrigo Travessa"> <StudentReview/></Student>
      <Student experience={5} name="Carlos Travessa"><StudentReview/></Student>
      <Student experience={7} name="Rosemeri Travessa" />
      <Student experience={12} name="Thiago Travessa" />
      <Student experience={41} name="Lolzin Travessa" />
    </div>
  );
}

export default MainBody;
