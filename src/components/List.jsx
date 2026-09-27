// import React from 'react'

// function List() {
//   return (
//     <>
//       <div className="List">
//         <div className="indexO"><div id="sapDash"></div> <div id="indexName">About</div></div>
//         <div className="indexO"><div id="sapDash"></div> <div id="indexName">Skills</div></div>
//         <div className="indexO"><div id="sapDash"></div> <div id="indexName">Experiance</div></div>
//         <div className="indexO"><div id="sapDash"></div> <div id="indexName">Projects</div></div>
//         <div className="indexO"><div id="sapDash"></div> <div id="indexName">Education</div></div>
//       </div>
//     </>
//   )
// }

// export default List


import { useEffect, useState } from "react";
import { sections } from "./sections"; // import if external

const List = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="List">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`indexO ${activeId === section.id ? "active" : ""}`}
          onClick={() => handleClick(section.id)}
        >
          <div id="sapDash"></div>
          <div id="indexName">{section.label}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
