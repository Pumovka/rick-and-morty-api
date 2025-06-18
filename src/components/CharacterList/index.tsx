import { ICharacter } from "../../api/apiFetch";
import "./style.css";

interface ICharacterList {
  characters: ICharacter[];
  searchQuery: string;
}

const CharacterList = ({ characters, searchQuery }: ICharacterList) => {
  return (
    <div className="card_container">
      {characters.length ? (
        characters.map((character) => (
          <div className="character_card" key={character.id}>
            <h3 className="character_name">{character.name}</h3>
            <img
              className="character_img"
              src={character.image}
              alt={character.name}
            />
            <div className="character_status">
              <p> {character.status === "Dead" ? "Dead" : ""}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="undefinded">
          {searchQuery ? "This character was not found :( " : ""}
        </div>
      )}
    </div>
  );
};
export default CharacterList;
