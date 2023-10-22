import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Pet from "./data/pet";
import PetCard from "./components/pet_card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import PetForm from "./components/pet-form";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  const [cats, setCats] = useState<Array<Pet>>(catData);
  const [dogs, setDogs] = useState<Array<Pet>>(dogData);
  console.log("Our pretties 😻: ", cats.length);
  console.log("Our pretties 🐕‍🦺🐶: ", dogs.length);

  return (
    <>
      <Navbar />
      <Header catCount={cats.length} dogCount={dogs.length} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <PetCard
              petObj={cat}
              key={cat.id}
              imageIndex={index}
              animalType="Cat"
            />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogs.map((dog, index) => (
            <PetCard
              petObj={dog}
              key={dog.id}
              imageIndex={index}
              animalType="Dog"
            />
          ))}
        </div>

        <div className="pet__form">
          <PetForm pets={cats} setPets={setCats} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
