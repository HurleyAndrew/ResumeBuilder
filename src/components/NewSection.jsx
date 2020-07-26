import React, { useState } from "react";
import SingleInput from "./SingleInput";
import SectionItem from "./SectionItem";
import generateID from "../utils/generateID";

const NewSection = ({ className, getData, id }) => {
  let [listOfSectionChildren, setListOfSectionChildren] = useState([]);
  let [sectionTitle, setSectionTitle] = useState("");
  let [sectionItems, setSectionItems] = useState([]);

  const payload = {
    sectionID: id,
    sectionTitle: sectionTitle,
    sectionItems: sectionItems,
  };
  const handleData = () => {
    getData(payload);
  };

  const getDataFromSectionItem = (data) => {
    setSectionItems(sectionItems.concat(data));
  };

  const addSectionItem = () => {
    setListOfSectionChildren(
      listOfSectionChildren.concat(
        <SectionItem getData={getDataFromSectionItem} id={generateID()} />
      )
    );
  };

  return (
    <div className={"grid-8 col-1-8 " + className} onChange={handleData}>
      <SingleInput
        className="col-1-8"
        type="sectionTitle"
        value={sectionTitle}
        onChange={setSectionTitle}
        eyebrowText="Enter Section Title"
        placeholder="Section Title"
      />
      {listOfSectionChildren}
      <button className="addSectionObject col-1-8" onClick={addSectionItem}>
        + Add Item
      </button>
    </div>
  );
};

export default NewSection;
