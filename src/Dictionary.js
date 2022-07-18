import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [serchval, setSearchval] = useState();

  function handleResponse(resp) {
    console.log(resp.data);
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

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Your word"
          onChange={handleSerchValue}
        />
        <input type="submit" value="SEARCH" className="ms-4 btn btn-warning" />
      </form>
    </div>
  );
}
