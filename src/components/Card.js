import React from "react";

const Card = (props) => {

    const person = props.person;

    return (
        <div className="cardcontent">
            <h2>{person.name}</h2>
            <h3>Username:</h3> <p> {person.username}</p>
            <h3>E-mail:</h3> <p> {person.email}</p>
            <h3>Address:</h3>
            <div className="address">
                <div><b>Street:</b> <p> {person.address.street}</p></div>
                <div><b>Suite:</b> <p> {person.address.suite}</p></div>
                <div><b>City:</b> <p> {person.address.city}</p></div>
                <div><b>Zipcode:</b> <p> {person.address.zipcode}</p></div>
                <div><b>Geo(latitude):</b> <p> {person.address.geo.lat}</p></div>
                <div><b>Geo(longitude):</b> <p> {person.address.geo.lng}</p></div> 
            </div>
            <h3>Phone:</h3> <p>{person.phone}</p>
            <h3>Website:</h3> <p> {person.website}</p>
            <h3>Company:</h3>
            <div className="company">
                <div><b>Name:</b> <p> {person.company.name}</p></div>
                <div><b>Catchphrase:</b> <p> {person.company.catchPhrase}</p></div>
                <div><b>Bs:</b> <p> {person.company.bs}</p></div>
            </div>
        </div>
    );
}

export default Card;
