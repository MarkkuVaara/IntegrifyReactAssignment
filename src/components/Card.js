import React from "react";
import { useParams } from "react-router-dom";

const Card = (props) => {

    const content = props.content;
    const id = useParams().id;
    const person = content.find(p => p.id === Number(id));

    return (
        <div className="cardcontent">
            <h2>{person.name}</h2>
            <h3>Username:</h3> <p>{person.username}</p>
            <h3>E-mail:</h3> <a href={person.email} onclick="location.href=this.href" target="location.href=this.href">{person.email}</a>
            <h3>Address:</h3>
            <div className="address">
                <div><b>Street:</b> <p> {person.address.street}</p></div>
                <div><b>Suite:</b> <p> {person.address.suite}</p></div>
                <div><b>City:</b> <p> {person.address.city}</p></div>
                <div><b>Zipcode:</b> <p> {person.address.zipcode}</p></div>
            </div>
            <div className="geo">
                <div><b>Geo(latitude):</b> <p> {person.address.geo.lat}</p></div>
                <div><b>Geo(longitude):</b> <p> {person.address.geo.lng}</p></div>
            </div>
            <h3>Phone:</h3> <p>{person.phone}</p>
            <h3>Website:</h3> <a href={person.website} onclick="location.href=this.href" target="location.href=this.href"> {person.website}</a>
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
