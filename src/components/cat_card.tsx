import Cat from "../data/cat";

interface CatCardProps {
  //   name: string;
  //   species: string;
  //   favFoods: string[];
  //   birthYear: number;
  catObj: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ catObj }) => {
  //   console.log(
  //     "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
  //     props
  //   );
  return (
    <div className="card">
      <h3 className="card__text card__header">{catObj.name}</h3>
      <p className="card__text">Species: {catObj.species}</p>
      <p className="card__text">Favourite Food(s): {catObj.favFoods}</p>
      <p className="card__text">Birth Year: {catObj.birthYear}</p>
    </div>
  );
};

export default CatCard;
