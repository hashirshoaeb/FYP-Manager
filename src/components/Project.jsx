import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Data from "../projects.json";
import ItemsCarousel from "react-items-carousel";

export default () => {
  const state = { data: Data.Fyp };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="jumbotron my-5">
      <div className="container-fluid">
        {" "}
        <h1 className="display-4 text-center"> Recent Projects</h1>{" "}
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            leftChevron={<div className="btn btn-outline-dark">{"<"}</div>}
            rightChevron={<div className="btn btn-outline-dark">{">"}</div>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {state.data.map(d => (
              <ProjectCard key={d.id} data={d}>
                {" "}
              </ProjectCard>
            ))}
          </ItemsCarousel>
        </div>{" "}
      </div>
    </div>
  );
};
 