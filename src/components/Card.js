
const Card = (props) => {

    const person = props.person;

    return (
        <div className="cardcontent">
            <p>Name: {person.name}</p>
            <p>Username: {person.username}</p>
            <p>E-mail: {person.email}</p>
            <p>Address:</p>
            <div className="address">
                <p>Street: {person.address.street}</p>
                <p>Suite: {person.address.suite}</p>
                <p>City: {person.address.city}</p>
                <p>Zipcode: {person.address.zipcode}</p>
                <div className="geo">
                  <p>Geo(latitude): {person.address.geo.lat}</p>
                  <p>Geo(longitude): {person.address.geo.lng}</p>
                </div>
            </div>
            <p>Phone: {person.phone}</p>
            <p>Website: {person.website}</p>
            <p>Company:</p>
            <div className="company">
                <p>Name: {person.company.name}</p>
                <p>Catchphrase: {person.company.catchPhrase}</p>
                <p>Bs: {person.company.bs}</p>
            </div>
        </div>
    );
}

export default Card;
