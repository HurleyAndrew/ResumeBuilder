import React, { useState } from "react";

import SingleInput from "./SingleInput";
import MultiLineInput from "./MultiLineInput";

const SectionItem = ({ getData, id }) => {
  let [positionTitle, setPositionTitle] = useState("");
  let [placeOfWork, setPlaceOfWork] = useState("");
  let [description, setDescription] = useState("");
  let [duration, setDuration] = useState("");

  const payload = {
    id: id,
    type: "sectionItem",
    positionTitle: positionTitle,
    placeOfWork: placeOfWork,
    description: description,
    duration: duration,
  };

  const handleData = () => {
    getData(payload);
  };

  return (
    <div className="settings grid-8 col-1-8" onChange={handleData}>
      <SingleInput
        className="col-1-3"
        type="sectionTitle"
        value={positionTitle}
        onChange={setPositionTitle}
        eyebrowText="Enter Position Title"
        placeholder="Position Title"
      />{" "}
      <SingleInput
        className="col-4-6"
        type="sectionTitle"
        value={placeOfWork}
        onChange={setPlaceOfWork}
        eyebrowText="Enter Place of Work"
        placeholder="Place of Work"
      />
      <SingleInput
        className="col-7-8"
        type="sectionTitle"
        value={duration}
        onChange={setDuration}
        eyebrowText="Duration"
        placeholder="x/xx/xxxx - x/xx/xxxx"
      />
      <MultiLineInput
        className="col-1-8"
        type="sectionTitle"
        value={description}
        onChange={setDescription}
        eyebrowText="Description"
        placeholder="What I learned in boating school is..."
      />
    </div>
  );
};

export default SectionItem;
