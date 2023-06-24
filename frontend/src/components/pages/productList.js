import React, { useState, useEffect } from "react";


function RecipeList() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setMessage(data.recipes));
  }, []);

  return (
    <div>
    <h1>List of Recipes Added</h1>
    { 
      <div>
      {Object.keys(message).map((key, i) => (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span>Value: {message[key]}</span>
        </p>
      ))}
      
    </div>
    }
    </div>
  );
}

export default RecipeList;