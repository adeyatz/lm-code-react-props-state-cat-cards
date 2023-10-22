import Pet from "../data/pet";
import catImages from "../data/cat-images";
import PetImage from "./pet_image";

interface PetCardProps {
  petObj: Pet;
  imageIndex: number;
  animalType: "Cat" | "Dog";
}

const PetCard: React.FC<PetCardProps> = ({
  petObj,
  imageIndex,
  animalType,
}) => {
  const { name, species, favFoods, birthYear } = petObj;
  return (
    <div className="card">
      {imageIndex < catImages.length && animalType === "Cat" && (
        <PetImage
          image={catImages[imageIndex].image}
          altText={catImages[imageIndex].altText}
          licenceType={catImages[imageIndex].licenceType}
          licenceUrl={catImages[imageIndex].licenceUrl}
          attributionName={catImages[imageIndex].attributionName}
          attributionUrl={catImages[imageIndex].attributionUrl}
        />
      )}
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(",")}</p>
      <p className="card__text">Birth Year: {birthYear} </p>
    </div>
  );
};

export default PetCard;
