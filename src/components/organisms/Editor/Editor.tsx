import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Editor: React.FC<EditorProps> = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleChange = React.useCallback((html: any) => {
    var divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    // return divContainer.textContent || divContainer.innerText || "";
    console.log(divContainer.innerText);
  }, []);

  return (
    <ReactQuill
      theme="bubble"
      onChange={handleChange}
      modules={modules}
      formats={formats}
      style={{ background: "white", width: "100%", height: 300 }}
    ></ReactQuill>
  );
};

export interface EditorProps {}

export default Editor;
