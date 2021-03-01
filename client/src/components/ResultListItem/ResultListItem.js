import React, { Component } from "react";

class ResultListItem extends Component {
  state = {
    monuted: false,
    bgcolor: "",
    color: "",
    text: "Save",
  };

  componentDidMount = () => {
    this.setState({
      monuted: true,
    });
    console.log("Mounted");
  };
  getStyle = () => {
    if (this.state.text === "Save") {
      this.setState({
        bgcolor: "00E000",
        Color: "white",
        text: "Saved",
      });
    } else {
      this.setState({
        bgcolor: "",
        bgcolor: "",
        color: "",
        text: "save",
      });
    }
  };

  onClickFunc = () => {
    this.props.saveGoogleBook(this.props);
    this.getStyle();
  };

  render() {
    const { book } = this.props;
    return (
      <div>
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <img
              src={this.props.image}
              style={{ maxWidth: "100px" }}
              alt="book"
            />
            <h4 className="card-title" style={{ margin: "10px 0" }}>
              {this.props.title}
            </h4>
            <p className="card-text">{this.props.description}</p>
            <p style={{ fontStyle: "italic" }}>Author: {this.props.authors}</p>
            <a
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginRight: "6px" }}
            >
              View Book
            </a>
            <button
              onClick={this.onClickFunc}
              style={{
                backgroundColor: this.state.bgColor,
                color: this.state.color,
              }}
              className="btn"
            >
              {" "}
              {this.state.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultListItem;
