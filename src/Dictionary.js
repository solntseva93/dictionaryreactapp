import react, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [serchval, setSearchval] = useState();

  function handleSerchValue(e) {
    e.preventDefault();
    setSearchval(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    alert(serchval);
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
