import Pet from "../data/pet";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface PetFormProps {
  pets: Array<Pet>;
  setPets: (arg: Pet[]) => void;
}

const PetForm: React.FC<PetFormProps> = ({ pets, setPets }) => {
  function addAPet() {
    console.log("Adding a pet");

    setPets([
      ...pets,
      {
        name: "Garfield",
        species: "Ginger Tom",
        favFoods: ["pies, chips, peas, gravy, curry sauce"],
        birthYear: 2012,
        id: uuidv4(),
      },
    ]);
  }

  return (
    <form>
      <fieldset>
        <legend>Add a cat</legend>

        {/* <p>Are you completing this form on behalf of:</p>

        <label htmlFor="self">Yourself </label>
        <input type="checkbox" id="self" name="self" />

        <label htmlFor="another">Someone else </label>
        <input type="checkbox" id="another" name="another" />

        <div>
          <label htmlFor="fname">First Name </label>
          <input type="text" id="fname" name="fname" required />
        </div>

        <div>
          <label htmlFor="lname">Last Name </label>
          <input type="text" id="lname" name="lname" required />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth </label>
          <input type="date" id="dob" name="dob" required />
        </div>

        <div>
          <label htmlFor="telephone">Telephone Number: </label>
          <input type="tel" id="telephone" name="telephone" required />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="message">Your query or message: </label>
          <input type="text" id="message" name="message" required />
        </div> */}

        <button type="button" onClick={addAPet}>
          Add a Cat
        </button>
      </fieldset>
    </form>
  );
};

export default PetForm;
