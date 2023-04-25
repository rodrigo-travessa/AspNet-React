import React from "react";

export default class AddContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      successMessage: "",
    };
  }

  handleAddContactSubmit= (e) =>{
    e.preventDefault();
    console.log(e)
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    this.props.handleAddContact({name:name, email:email, phone:phone})
  }

  render() {
    return (
      <div className="border row p-2">
        <form onSubmit={this.handleAddContactSubmit}>
          <div className="col-12">Add a new Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Name..."
              name="contactName"
            ></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Email..."
              name="contactEmail"

            ></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Phone..."
              name="contactPhone"

            ></input>
          </div>
          <div className="col-12 col-md-6 p-1 offset-md-3 ">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}
