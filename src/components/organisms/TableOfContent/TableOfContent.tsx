import React from "react";

/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
const Headings = ({ headings, activeId }: any) => (
    <ul>
      {headings.map((heading: any, index: number) => (
        <li key={index} className={heading.id === activeId ? "active" : ""}>
          <a
            href={`#${index}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: "smooth"
              });
            }}
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
                        behavior: "smooth"
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
      const headingElements = Array.from(
        document.querySelectorAll("div.quill h2, div.quill strong, div.quill em")
      );
    // console.log(content.content);

      const test = Array.from(content);

      console.log(test);

      // Created a list of headings, with H3s nested
      const newNestedHeadings = getNestedHeadings(test);

      console.log(newNestedHeadings,123);
      setNestedHeadings(newNestedHeadings);
    }, [content]);
  
    return { nestedHeadings };
  };
  
  const getNestedHeadings = (headingElements: any) => {
    const nestedHeadings: any = [];
  
    headingElements.forEach((heading: any, index: number) => {
      const { innerText: title, id } = heading;
  
      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title
        });
      }
    });
  
    return nestedHeadings;
  };
  
  const useIntersectionObserver = (setActiveId: any) => {
    const headingElementsRef = React.useRef<any>({});
    React.useEffect(() => {
      const callback = (headings: any) => {
        headingElementsRef.current = headings.reduce((map: any, headingElement: any) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);
  
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
            (a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );
  
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };
  
      const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "500px" });
  
      const headingElements = Array.from(document.querySelectorAll("h2, h3"));
  
      headingElements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, [setActiveId]);
  };
  
  /**
   * Renders the table of contents.
   */
  
const TableOfContents: React.FC<TableOfContentsProps> = ({content}) => {
    const [activeId, setActiveId] = React.useState();
    const { nestedHeadings } = useHeadingsData(content);
    useIntersectionObserver(setActiveId);
  
    return (
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };


  export interface TableOfContentsProps {
    content: any;
  }

  export default TableOfContents;