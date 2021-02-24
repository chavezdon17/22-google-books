import React, { Component, component } from "react";
import Api from "../../utils/Api";

class Home extends Component {
  state = {
    books: [],
    search: "",
  };
  searchBooks = () => {
    Api.googleBooks(this.state.search)
      .then((res) => {
        console.log("this is res.data", res.data.items);
        this.setState({
          books: res.data.items,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks();
  };
  saveGoogleBook = (currentBook) => {
    Api.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log("successful post to DB", res))
      .catch((err) => console.log("this is the error", err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Jumbotron />
          <Form>
            <h4>Search for books</h4>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholer="e.g. Harry potter"
            />
            <SubmitBtn onClick={this.handleFormSubmit} />
          </Form>

          {this.state.books.length ? (
            <ResultList
              bookState={this.state.books}
              saveGoogleBook={this.saveGoogleBook}
            ></ResultList>
          ) : (
            <div>
              <hr />
              <p style={{ fontStyle: "italic" }}> No results to display</p>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Home;
