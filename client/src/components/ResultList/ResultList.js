import React, { Component } from "react";

class ResultList extends Component {
  render() {
    console.log("Props", this.props.bookState);
    return this.props.bookState.map((book) => (
      <ResultListItem
        key={book.id}
        id={book.id}
        title={book.volumeInfo.title}
        link={book.volumeInfo.previewLink}
        authors={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "https://www.shutterstock.com/search/no+album"
        }
        description={book.volumeInfo.description}
        saveGoogleBook={this.props.saveGoogleBook}
      />
    ));
  }
}

export default ResultList;
