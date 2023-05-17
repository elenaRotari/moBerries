import { ChangeEvent, useContext } from "react";
import { Form } from "react-router-dom";
import { ExampleContext } from "../../MyContext";
import { ACTION } from "../../reducer/reducer";

const SearchBar = () => {
  const [state, dispatch] = useContext(ExampleContext);

  const filtered = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: ACTION.SEARCH,
      payload: event.target.value,
    });
  };

  return (
    <input
      type="text"
      name="title"
      placeholder="search by e-mail"
      onChange={filtered}
      className="searchBar"
    />
  );
};

export default SearchBar;
