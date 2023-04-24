export default function Student(props){
  
  
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-2"> <img  src={`https://ui-avatars.com/api/?name=${props.name}`} className="w-100 h-100" alt=""></img></div>
          <div className="col-8"> {props.name} <br/>
          Programming Experience {props.experience} years</div>
        <div className="col-2">
          {props.children}
        </div>
        </div>
      </div>
    )
  }
