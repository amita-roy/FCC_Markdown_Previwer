import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 40%;
  padding: 10px;
  height: calc(100vh - 80px);

  textarea {
    height: 100%;
    width: 100%;
    overflow: scroll;
    border: none;
    font-size: 16px;
  }
  textarea:focus {
    outline: none;
  }
`;

class Editor extends Component {
  render() {
    return (
      <Container>
        <textarea
          value={this.props.value}
          onChange={this.props.onChange}
        ></textarea>
      </Container>
    );
  }
}

export default Editor;
