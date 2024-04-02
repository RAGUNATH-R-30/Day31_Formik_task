import React from "react";

import AuthorCard from "./AuthorCard";

function Allauthors({ content }) {
  return (
    <>
      <h3>All Authors</h3>
      <div className="row">
        {content.map((item, index) => {
          return <AuthorCard content={item} key={index}></AuthorCard>;
        })}
      </div>
    </>
  );
}

export default Allauthors;
