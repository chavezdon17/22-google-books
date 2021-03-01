import React, { Component, component } from "react";
import { Container } from "../Componets/Grid/Grid";
imp;
import Api from "../../utils/Api";
//finish imports

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount = () => {
    this.getBook();
  };

  deleteGoogleBook = (currentBook) => {
    Api,
      deleteBook(currentBook.id)
        .then((res) => {
          console.log("Book deleted", res);
          this.getBook();
        })
        .catch((err) => {
          console.log("Error", err);
        });
  };

  getBooks = () => {
    Api.getBooks().then((res) => {
      this.setState({
        savedBooks: res.data,
      })
        .catch((err) => {
          console.log("res from getBooks", res);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Jumbotron />
          {this.state.savedBooks.length ? (
            <SavedList
              bookState={this.state.savedBooks}
              deleteGoogleBook={this.deleteGoogleBook}
            ></SavedList>
          ) : (
            <h4> No results to display</h4>
          )}
        </Container>
      </div>
    );
  }
}

export default Saved;
