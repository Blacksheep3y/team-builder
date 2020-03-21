import React, { useState } from "react";

const PirateForm = props => {


  const [pirateFormState, setPirateFormState] = useState({
    name: "",
    title: "",
    bounty: "",
    crew: "" 
  });
  console.log(pirateFormState);

  const changePirateHandler = event => {
    setPirateFormState({
      ...pirateFormState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitPirateHandler = event => {
    event.preventDefault();

    props.addPirate({
      ...pirateFormState,
      id: Date.now()
    });

    /*This simply clears the user data and resets the form!*/
    setPirateFormState({
        name: "",
        title: "",
        bounty: "",
        crew: "" 
    });
  };

  return (
    <form onSubmit={formSubmitPirateHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={pirateFormState.name}
        onChange={changePirateHandler}
        placeholder="Enter the name of the Pirate here."
      />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={pirateFormState.title}
        onChange={changePirateHandler}
        placeholder="Enter the title of the Pirate here."
      />
      <label htmlFor="bounty">Bounty:</label>
      <input
        type="text"
        name="bounty"
        value={pirateFormState.bounty}
        onChange={changePirateHandler}
        placeholder="Enter the bounty of the Pirate here."
      />
      <label htmlFor="crew">Crew:</label>
      <input
        type="text"
        name="crew"
        value={pirateFormState.crew}
        onChange={changePirateHandler}
        placeholder="Enter the crew of the Pirate here."
      />
      <button type="submit">Add Your New Pirate!</button>
    </form>
  );
};

export default PirateForm;
