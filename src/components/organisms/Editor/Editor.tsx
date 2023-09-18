import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import TableOfContents from "../TableOfContent/TableOfContent";

// import TableOfContent from "../TableOfContent/TableOfContent";

const Editor: React.FC<EditorProps> = () => {
  const [html, setHTML] = React.useState<any>("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
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
    var divContainer = document.querySelectorAll(
      "div.quill h2, div.quill strong, div.quill h3"
    );
    // return divContainer.textContent || divContainer.innerText || "";

    // var divContainer1 = document.createElement("div");
    // divContainer1.innerHTML = html;
    // // return divContainer.textContent || divContainer.innerText || "";
    // console.log(divContainer1.innerHTML);
    setHTML(divContainer);
  }, []);

  return (
    <>
      <ReactQuill
        theme="bubble"
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={{ background: "white", width: "100%", height: 300 }}
      ></ReactQuill>
      <TableOfContents content={html} />
    </>
  );
};

export interface EditorProps {}

export default Editor;
