import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Description from "./Description.js";

export default function Dictionary() {
  const [serchval, setSearchval] = useState();
  const [responseData, setresponseData] = useState(null);

  function handleResponse(resp) {
    setresponseData(resp.data);
  }

  function handleSerchValue(e) {
    e.preventDefault();
    setSearchval(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchval}`;
    axios.get(apiURL).then(handleResponse);
  }

  //

  return (
    <div>
      <div className="header_block">
        <h1>Dictionary App</h1>
        <h3>Write down the word you want to search</h3>
      </div>
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Your word"
          onChange={handleSerchValue}
        />
        <input type="submit" value="SEARCH" className="ms-4 btn btn-warning" />
      </form>
      <Description data={responseData} />
    </div>
  );
}
