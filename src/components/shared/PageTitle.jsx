/* eslint-disable react/prop-types */
import "./PageTitle.css";

function PageTitle({title}) {
  return (
    <div className="title-container">
      <div className="Title">
        <h1>{title}</h1>
        <p>Home / <span>{title}</span></p>
      </div>
    </div>
  );
}

export default PageTitle;
