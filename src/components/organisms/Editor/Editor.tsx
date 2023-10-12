import React from "react";
import ReactQuill from "react-quill";
import TableOfContents from "../TableOfContent/TableOfContent";
import "react-quill/dist/quill.bubble.css";
import "katex/dist/katex.min.css";

const Editor: React.FC<EditorProps> = ({
  type,
  level,
  handleQuestgen,
  count,
  defaultValue,
  handleEditorChange,
}) => {
  const [html, setHTML] = React.useState<any>("");

  // const katex = require("katex");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      // [
      //   { list: "ordered" },
      //   { list: "bullet" },
      //   { indent: "-1" },
      //   { indent: "+1" },
      // ],
      // ["link", "image"],
      ["formula"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    // "list",
    "bullet",
    "formula",
    // "link",
    "image",
  ];

  const handleChange = React.useCallback(
    (html: any) => {
      var divContainer = document.querySelectorAll(
        "div.quill h2, div.quill strong, div.quill h3"
      );
      if (handleEditorChange) {
        var divContainer1 = document.createElement("div");
        divContainer1.innerHTML = html;
        console.log(divContainer1.textContent || divContainer1.innerText);
        handleEditorChange(
          divContainer1.textContent || divContainer1.innerText
        );
      }
      setHTML(divContainer);
    },
    [handleEditorChange]
  );

  return (
    <>
      <ReactQuill
        theme="bubble"
        onChange={handleChange}
        modules={modules}
        formats={formats}
        defaultValue={defaultValue}
        style={{ background: "white", width: "100%", minHeight: '50%'}}
      ></ReactQuill>
      <TableOfContents
        content={html}
        handleQuestgen={handleQuestgen}
        type={type}
        level={level}
        count={count}
      />
    </>
  );
};

export interface EditorProps {
  handleQuestgen: any;
  type: any;
  level: any;
  count: number;
  defaultValue?: string;
  handleEditorChange?: any;
}

export default Editor;
