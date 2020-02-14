import React, { Component } from "react";
import styled from "styled-components";
import marked from "marked";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 50%;
  padding: 10px;
  overflow: scroll;
  height: calc(100vh - 80px);
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
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

class Preview extends Component {
  render() {
    const html = marked(this.props.value, { renderer });
    return (
      <Container>
        <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    );
  }
}

export default Preview;
