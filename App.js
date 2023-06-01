import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


const RPGForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');
  const [abilities, setAbilities] = useState('');

  const handleSave = () => {
    // Save the information to the Azure App Service database
    // Implement your save logic here
    console.log('Saving data:', { name, age, job, abilities });
  };

  const handleClone = () => {
    // Clone a new record based on the existing record
    // Implement your clone logic here
    console.log('Cloning data:', { name, age, job, abilities });
  };

  const handleTokenChange = (event) => {
    // Handle changes to the token input field
    // Implement your token change logic here
    console.log('Token changed:', event.target.value);
  };

  return (
    <div>
      <h2>Enter RPG Character Information</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Job:
        <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      </label>
      <br />
      <label>
        Abilities:
        <input type="text" value={abilities} onChange={(e) => setAbilities(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClone}>Clone</button>
      <br />
      <label>
        Token:
        <input type="text" onChange={handleTokenChange} />
      </label>
    </div>
  );
};

export default RPGForm;
