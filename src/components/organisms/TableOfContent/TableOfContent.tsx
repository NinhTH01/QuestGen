import React from "react";
import $ from "jquery";
import styles from "./TableOfContent.module.css";
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
const Headings = ({ headings, activeId, expanded, handleGenQuest }: any) => (
  <ul
    id="mySideNav"
    className={`${styles.body} `}
    style={{
      overflow: "scroll",
      marginLeft: -15,
      marginTop: 20,
      height: "100vh",
      whiteSpace: "nowrap",
      // width: 100,
    }}
  >
    {headings.map((heading: any, index: number) => (
      <li key={index} style={{ listStyleType: "none" }}>
        <a
          href={`#1`}
          onClick={() => {
            handleGenQuest(heading);
          }}
          className={` ${styles.tooltip} text-black my-2`}
          style={{ textDecoration: "none" }}
        >
          <div
            className=" overflow-hidden text-white"
            style={{
              textOverflow: "ellipsis",
              width: 160,
              textDecoration: "none",
              // overflowX: "hidden",
            }}
          >
            {heading.title}
          </div>

          <span className={` text-white ${styles.tooltiptext}`}>
            Click to generate
          </span>
        </a>

        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li
                style={{ listStyleType: "none" }}
                key={child.id}
                className={` ${styles.tooltip} text-black my-2`}
              >
                <a
                  href={`#1`}
                  onClick={() => {
                    handleGenQuest(heading);
                  }}
                  className={` ${styles.tooltip} text-black`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className=" overflow-hidden text-white"
                    style={{
                      textOverflow: "ellipsis",
                      width: 160,
                      textDecoration: "none",
                      // overflowX: "hidden",
                    }}
                  >
                    {child.title}
                  </div>

                  <span className={` text-white ${styles.tooltiptext}`}>
                    Click to generate
                  </span>
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

const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  handleQuestgen,
  type,
  level,
  count,
}) => {
  const width = useSelector(currentWidth);

  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData(content);

  const [closed, setClosed] = React.useState<boolean>(true);

  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = React.useCallback(() => {
    setClosed(!closed);
  }, [closed]);

  const handleExpand = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleGenQuest = React.useCallback(
    (heading: any) => {
      const convertedArray: any = [];
      heading?.contents?.map((index: any) => {
        return convertedArray.push(heading?.contents[index]?.innerText);
      });
      handleQuestgen(convertedArray.toString(), type, level, count);
    },
    [handleQuestgen, level, type, count]
  );

  useIntersectionObserver(setActiveId);

  return (
    <>
      {closed && (
        <Button
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            background: "rgb(99 102 241)",
            borderRadius: 0,
            borderWidth: 0,
            padding: 8,
            zIndex: -2,
          }}
          onClick={handleChange}
        >
          <MenuIcon htmlColor={"white"} />
        </Button>
      )}

      <nav
        aria-label="Table of contents"
        className={`${styles.container} ${styles.sidenav} `}
        style={{
          position: "fixed",
          left: closed ? -220 : 0,
          top: 0,
          width: 220,
          background: "rgb(99 102 241)",
          zIndex: -1,
          minHeight: "98vh",
          transition: "0.5s",
        }}
      >
        <div
          // style={{ height: expanded ? "5%" : "20%" }}
          className="d-flex justify-content-between align-items-center"
        >
          <div
            className="text-white"
            style={{ fontWeight: "bold", marginLeft: 16 }}
          >
            {" "}
            Tóm tắt
          </div>

          <div>
            <Button
              className=""
              style={{
                right: 0,
                backgroundColor: "rgba(137, 236, 255,.01)",
                borderWidth: 0,
              }}
              onClick={handleExpand}
            ></Button>
            <Button
              className=""
              style={{
                right: 0,
                // marginLeft: 16,
                backgroundColor: "rgba(137, 236, 255,.01)",
                borderWidth: 0,
              }}
              onClick={handleChange}
            >
              <ClearIcon htmlColor="white" />
            </Button>
          </div>
        </div>
        <Headings
          headings={nestedHeadings}
          activeId={activeId}
          expanded={expanded}
          handleGenQuest={handleGenQuest}
        />
      </nav>
    </>
  );
};

export interface TableOfContentsProps {
  content: any;

  type: any;

  level: any;

  handleQuestgen: any;

  count: number;
}

export default TableOfContents;
