import React, { useState, useEffect } from "react";

import Card from './components/Card';

const App = (props) => {

  const [content, setContent] = useState(props.content);

  return (

    <div className="main">
      <h1>User information</h1>

      <div className="cards">
        {content.map(person => 
          <div className="card">
            <b>{person.name}</b>
            <p>@{person.username}</p>
            <p>{person.email}</p>
            <button>More details</button>
            <Card person={person} />
          </div>
        )}
      </div>

    </div>

  );

}

export default App;
