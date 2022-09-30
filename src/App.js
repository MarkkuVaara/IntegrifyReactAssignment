
const App = (props) => {

  const content = props.content;

  return (

    <div className="main">
      <h1>User information</h1>
      <div className="cards">
        {content.map(person => 
          <div className="cardcontent">
            <p>Id: {person.id}</p>
            <p>Name: {person.name}</p>
            <p>Username: {person.username}</p>
            <p>E-mail: {person.email}</p>
            <p>Address: {JSON.stringify(person.address)}</p>
            <p>Phone: {person.phone}</p>
            <p>Website: {person.website}</p>
            <p>Company: {JSON.stringify(person.company)}</p>
          </div>
        )}
      </div>
    </div>

  );

}

export default App;
