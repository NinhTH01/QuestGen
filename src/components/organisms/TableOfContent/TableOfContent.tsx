import React from "react";
import $ from "jquery";
import styles from "./TableOfContent.module.scss";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currentWidth } from "../../../global/selectors";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
const Headings = ({ headings, activeId, expanded }: any) => (
  // <div>
  //   {headings.map((heading: any, index: number) => (
  //     // <li key={index} className={heading.id === activeId ? "active" : ""} >
  //     <>
  //       <a
  //         href={`#${index}`}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           document.querySelector(`#${heading.id}`)?.scrollIntoView({
  //             behavior: "smooth",
  //           });
  //         }}
  //         className=" text-black"
  //       >
  //         {heading.title}
  //       </a>
  //       {heading.items.length > 0 && (
  //         <ul>
  //           {heading.items.map((child: any) => (
  //             <li
  //               key={child.id}
  //               className={child.id === activeId ? "active" : ""}
  //             >
  //               <a
  //                 href={`#${child.id}`}
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   document.querySelector(`#${child.id}`)?.scrollIntoView({
  //                     behavior: "smooth",
  //                   });
  //                 }}
  //               >
  //                 {child.title}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     {/* </li> */}
  //     </>
  //   ))}
  // </div>

  <ul
    className=" "
    style={{
      height: expanded ? "95%" : "80%",
      overflow: "scroll",
      width: "100%",
      overflowX: "hidden",
    }}
  >
    {headings.map((heading: any, index: number) => (
      <li key={index} className={heading.id === activeId ? "active" : ""}>
        <a
          href={`#${index}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className=" text-black"
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = (content: any) => {
  const [nestedHeadings, setNestedHeadings] = React.useState<any>([]);

  React.useEffect(() => {
    const headingElements = Array.from(content);

    const tableContent: any = [];

    const contentArray: any = [];

    $("div.quill h2, div.quill h3").each(function (index: number) {
      const body = $(this).nextUntil("div.quill h2, div.quill h3");
      contentArray.push(body);
    });

    headingElements.forEach((heading, index) => {
      tableContent.push({ heading: heading, content: contentArray[index] });
    });

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(tableContent);

    console.log(newNestedHeadings, "22");
    setNestedHeadings(newNestedHeadings);
  }, [content]);

  return { nestedHeadings };
};

const getNestedHeadings = (tableContent: any) => {
  const nestedHeadings: any = [];

  tableContent?.forEach((value: any, index: number) => {
    const { content, heading } = value;

    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({
        id: `${index}`,
        title,
        items: [],
        contents: content,
      });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        contents: content,
      });
    }
  });

  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId: any) => {
  const headingElementsRef = React.useRef<any>({});
  React.useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: any) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      // Get all headings that are currently visible on the page
      const visibleHeadings: any = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: any) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any) =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("iframe"),
      rootMargin: "500px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const width = useSelector(currentWidth);

  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData(content);

  const [closed, setClosed] = React.useState<boolean>(false);

  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = React.useCallback(() => {
    setClosed(!closed);
  }, [closed]);

  const handleExpand = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  useIntersectionObserver(setActiveId);

  console.log(width);

  return (
    <>
      {closed ? (
        <Button
          style={{
            position: "absolute",
            right: 20,
            top: 180,
            background: "rgba(137, 236, 255,.4)",
            borderRadius: 10,
            padding: 8,
          }}
          onClick={handleChange}
        >
          <MenuIcon htmlColor={"black"} />
        </Button>
      ) : (
        <nav
          aria-label="Table of contents"
          style={{
            position: "absolute",
            right: 20,
            top: 180,
            width: width < 750 ? "90%" : "30%",
            height: expanded ? "80%" : 140,
            background: "rgba(137, 236, 255,.4)",
            borderRadius: 10,
            padding: 16,
          }}
        >
          <div
            style={{ height: expanded ? "5%" : "20%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div style={{ fontWeight: "bold" }}> Table of Contents</div>

            <div style={{ paddingRight: 28, marginRight: 8 }}>
              <Button
                className=""
                style={{
                  right: 0,
                  backgroundColor: "rgba(137, 236, 255,.01)",
                  borderWidth: 0,
                }}
                onClick={handleExpand}
              >
                {expanded ? (
                  <KeyboardArrowDownIcon htmlColor="black" />
                ) : (
                  <KeyboardArrowUpIcon htmlColor="black" />
                )}
              </Button>
              <Button
                className=""
                style={{
                  right: 0,
                  marginLeft: 16,
                  backgroundColor: "rgba(137, 236, 255,.01)",
                  borderWidth: 0,
                }}
                onClick={handleChange}
              >
                <ClearIcon htmlColor="black" />
              </Button>
            </div>
          </div>
          <Headings
            headings={nestedHeadings}
            activeId={activeId}
            expanded={expanded}
          />
        </nav>
      )}
    </>
  );
};

export interface TableOfContentsProps {
  content: any;
}

export default TableOfContents;
