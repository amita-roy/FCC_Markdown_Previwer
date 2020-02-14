import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Preview from "./Preview";
import Editor from "./Editor";
import { Placeholder } from "./Placeholder";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
  body {
    
    margin: 0;
    padding: 0;
    font-family: Roboto;
    
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

class App extends Component {
  state = { value: Placeholder };

  onChange = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Editor value={this.state.value} onChange={this.onChange} />
        <Preview value={this.state.value} />
      </Container>
    );
  }
}

export default App;
