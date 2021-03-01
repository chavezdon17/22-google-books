import React from "react";

function ResultListItem(props) {
  const { title, authors, image, link, descrption, deleteGoogleBook } = props;

  return (
    <div>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <img src={image} style={{ maxWidth: "100px" }} alt="jumbotron" />
          <h4 className="card-title" style={{ margin: "10px 0 " }}>
            {title}
          </h4>
          <p className="card-text"> {description}</p>
          <p style={{ fontStyle: "italic" }}>Author: {authors}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              marginRight: "6px",
              backgroundColor: "rbg(33, 150, 243)",
              color: "white",
            }}
          >
            View book
          </a>
          <button
            onClick={deleteGoogleBook.bind(this, props)}
            className="btn byn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultListItem;
