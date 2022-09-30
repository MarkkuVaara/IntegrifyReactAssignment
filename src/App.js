import React, { useState, useEffect } from "react";

import Card from './components/Card';
import Popup from './components/Popup';

const App = (props) => {

  const [content, setContent] = useState(props.content);
  const [popUp, setPopUp] = useState("");

  const togglePopUp = (name) => {
    setPopUp(name);
  };

  return (

    <div className="main">
      <h1>User information</h1>

      <div className="cards">
        {content.map(person => 
          <div className="card">
            <b>{person.name}</b>
            <p>@{person.username}</p>
            <p>{person.email}</p>
            <button onClick={() => togglePopUp(person.name)}>More details</button>
            {popUp === person.name && 
              <Popup content={
                <Card person={person} />
              } handleClose={togglePopUp} />
            }
          </div>
        )}
      </div>

    </div>

  );

}

export default App;
