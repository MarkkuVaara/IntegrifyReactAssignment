import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Card from './components/Card';
import Placeholder from './images/placeholder.jpg';

const App = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setContent(response.data)
      });
  }, []);

  return (

    <div className="main">
      <h1>User information</h1>

        <Router>
          <Routes>
            <Route path={`/cards/:id`} element={
              <div className="cardcontent">
                <button><Link to={`/`}>Back to main page</Link></button>
                <Card content={content} />
              </div>
            } />
            <Route path={`/`} element={
              <div className="cards">
              {content.map(person => 
                <div className="card">
                  <b>{person.name}</b>
                  <div style={{ height:'35%'}}>
                    <img src={Placeholder} alt={Placeholder} style={{ height:'100%'}}/>
                  </div>
                  <i>@{person.username}</i> 
                  <br /><br />
                  <div> <a href={person.email} onclick="location.href=this.href" target="location.href=this.href">{person.email}</a> </div>
                  <br />
                  <button><Link to={`/cards/${person.id}`}>More details</Link></button>
                </div>
              )}
              </div>
            } />
          </Routes>
        </Router>

    </div>

  );

}

export default App;
