import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Description from "./Description.js";
import Photos from "./Photos";

const apiKey = "563492ad6f91700001000001ab4453192e6d4234b75f9e1a4a89354f";

export default function Dictionary() {
  const [serchval, setSearchval] = useState();
  const [responseData, setResponseData] = useState(null);
  const [responsePhoto, setResponsePhoto] = useState(null);

  function handleResponse(resp) {
    setResponseData(resp.data);
  }

  function handlePhotoResponse(resp) {
    setResponsePhoto(resp.data.photos);
  }

  function handleSerchValue(e) {
    e.preventDefault();
    setSearchval(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchval}`;
    axios.get(apiURL).then(handleResponse);

    let photoUrl = `https://api.pexels.com/v1/search?query=${serchval}&per_page=8`;
    axios
      .get(photoUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePhotoResponse);
  }

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
      <Photos data={responsePhoto} />
    </div>
  );
}
