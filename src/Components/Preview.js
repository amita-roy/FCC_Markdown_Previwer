import React, { Component } from "react";
import styled from "styled-components";
import marked from "marked";

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
  padding: 20px 40px;
  overflow: scroll;
  height: calc(100vh - 197px);
`;
marked.setOptions({
  breaks: true,
  gfm: true,
  tables: true,
  pedantic: false,
  smartLists: true,
  langPrefix: "language-"
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class Preview extends Component {
  render() {
    const html = marked(this.props.value, { renderer });
    return (
      <Wrapper>
        <h3>Preview</h3>
        <Container>
          <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Wrapper>
    );
  }
}

export default Preview;
