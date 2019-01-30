import React from "react";

const Editor = props => {
  return (
    <div id="editor-container">
      <h1>Editor</h1>
      <textarea
        id="editor"
        name="editor"
        onChange={e => {
          props.updateMarkdown(e.target.value);
        }}
        value={props.placeholder}
      />
    </div>
  );
};

export default Editor;
