import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import { ExampleContext } from "./MyContext";
import { ACTION } from "./reducer/reducer";
import users from "../data.json";
import Table from "./components/table/Table";
import SearchBar from "./components/search/SearchBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Table />
      <Footer />
    </div>
  );
}

export default App;

export const loader = () => {
  return users;
};
