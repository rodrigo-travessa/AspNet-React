import React from 'react'

const Contact = (props) => {
  return (
    <div style={{marginTop: 15}}>
      <button className={`btn form-control ${props.contact.isFavorite? "btn-success" : "btn-danger"}`}>
        <span>{props.contact.id} {props.contact.name}</span> <br/>
        <span>{props.contact.email} {props.contact.phone} </span>
        <button className="btn btn-primary"> edit </button>
        <button className="btn btn-secondary m-2"> delete </button>
      </button>
    </div>
  )
}

export default Contact
