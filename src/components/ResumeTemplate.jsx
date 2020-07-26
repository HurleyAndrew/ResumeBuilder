import React from "react";
import "../resume.css";
import generateID from "../utils/generateID";

const ResumeTemplate = ({ data }) => {
  const createSections = () => {
    if (data.sectionData !== undefined) {
      return (
        <React.Fragment>
          {data.sectionData.map((item) => (
            <div className="sectionContainer">
              <span className="sectionTitle">{item.sectionTitle}</span>
              <div>
                {item.sectionItems.map((el) => (
                  <div className="sectionItem" id={generateID()}>
                    <div className="positionTitle">
                      {el.positionTitle}
                      {", "}
                      {el.duration}
                    </div>

                    <div className="placeOfWork">{el.placeOfWork}</div>
                    <p className="description">{el.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </React.Fragment>
      );
    } else {
      return <span>{data.sectionData.sectionTitle}</span>;
    }
  };

  return (
    <div id="pdfContent">
      <div
        className="resumeHeader"
        style={{ backgroundColor: data.primaryColor }}
      >
        <div>
          <span className="resumeTitle">{data.title}</span>
          <br />
          <span className="resumeFullname">{data.fullName}</span>
          <br />
        </div>
        <div>
          <span className="resumeWebsite">{data.website}</span>
          <br />
          <span className="resumeEmail">{data.email}</span>
        </div>
      </div>
      <div className="bodyContent">
        <div className="leftRail">{createSections()}</div>
        <div className="rightRail">right side</div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
