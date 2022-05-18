import React from "react";
import "../Documents/Documents.css";
import Filter from "./Filter/Filter";
import Document from "./Document/Document";

const Documents = () => {
  return(
      <div className="docs">
          <Filter/>
          <Document/>
      </div>
  )
}
export default Documents;