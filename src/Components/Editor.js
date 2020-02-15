import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 48%;

  h3 {
    font-weight: 400;
    margin-top: 0;
  }
`;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 100%;
  height: calc(100vh - 197px);

  textarea {
    height: 100%;
    width: 100%;
    padding: 20px 40px;
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
      <Wrapper>
        <h3>Editor</h3>
        <Container>
          <textarea
            value={this.props.value}
            onChange={this.props.onChange}
          ></textarea>
        </Container>
      </Wrapper>
    );
  }
}

export default Editor;
