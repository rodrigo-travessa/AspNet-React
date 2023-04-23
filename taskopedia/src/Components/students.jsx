export default function Students(props){
  
  
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-2"> <img  src={`https://ui-avatars.com/api/?name=${props.name}`} className="w-100 h-100" alt=""></img></div>
          <div className="col-10"> {props.name} <br/>
          Programming Experience {props.experience} years</div>
        </div>
      </div>
    )
  }
