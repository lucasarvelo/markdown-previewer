import React from "react";
import marked from "marked";

const Preview = props => {
  const renderer = new marked.Renderer();
  return (
    <div id="preview-container">
      <h1>Preview</h1>
      <div
        className="markdown-body"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, {
            sanitaze: true,
            breaks: true,
            renderer: renderer
          })
        }}
      />
    </div>
  );
};

export default Preview;
