import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: lightgrey;
  border: none;
  box-shadow: 0px 6px 6px 0px rgba(199, 199, 199, 1);
  padding: 20px 30px;

  h2 {
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <h2>Markdown Previewer</h2>
      </Container>
    );
  }
}

export default Header;
