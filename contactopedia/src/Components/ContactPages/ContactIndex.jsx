import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

export default class ContactIndex extends React.Component {

  constructor(props){
    super(props);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.state ={      
      contactList: [{
        id: 1,
        name: "Teste Travessa",
        phone: "555-4123",
        email: "teste@gmail.com",
        isFavorite: false,
      },
      {
        id: 2,
        name: "Rodrigo Travessa",
        phone: "555-9999",
        email: "teste@yahoo.com",
        isFavorite: true,
      },
      {
        id: 3,
        name: "Vivian Travessa",
        phone: "555-49867",
        email: "teste@live.com",
        isFavorite: true,
      }]
    }
  }

  handleAddContact = (newContact) => {
    
    const newFinalContact = { 
        id: this.state.contactList.length +1,
        name: newContact.name,
        phone: newContact.phone,
        email: newContact.email,
        isFavorite: false
    }  
    this.setState((prevState)=>{
      return this.state.contactList.push(newFinalContact);
    })
    
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact handleAddContact={this.handleAddContact}/>
            </div>
            <div className="row py-2">
              <FavoriteContacts contacts={this.state.contactList.filter((contact)=> contact.isFavorite === true)}/>
            </div>
            <div className="row py-2">
              <GeneralContacts contacts={this.state.contactList.filter((contact)=> contact.isFavorite === false)}/>
            </div>
            <div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
