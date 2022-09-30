
const App = (props) => {

  const content = props.content;

  return (

    <div className="main">
      <h1>Integrify React Assignment</h1>
      {content.map(person => 
        <div>
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

  );

}

export default App;
