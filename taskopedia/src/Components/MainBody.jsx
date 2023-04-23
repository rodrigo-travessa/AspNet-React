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

  export default MainBody