import React, { useState, useEffect } from "react";
import "../../index.css";

function SideBar({ onLinkClick, data, fetchedData }) {
  console.log('in sidebar', data)
  const [problemsArr, setProblemsArr] = useState([]);
  const [favoritesArr, setFavoritesArr] = useState([]);
  const [problems, setProblems] = useState({
    Easy: [],
    Medium: [],
    Hard: [],
  });
  const [links, setLinks] = useState({
    Easy: [],
    Medium: [],
    Hard: [],
  });

  function setObjs() {
    const tempProblems = {
      Easy: [],
      Medium: [],
      Hard: [],
    };

    const tempLinks = {
      Easy: [],
      Medium: [],
      Hard: [],
    };
    for (let i = 0; i < data.length; i++) {
      if (data[i].difficulty === "Easy") {
        problems.Easy.push(data[i].name);
        links.Easy.push(data[i].description);
      } else if (data[i].difficulty === "Medium") {
        problems.Medium.push(data[i].name);
        links.Medium.push(data[i].description);
      } else if (data[i].difficulty === "Hard") {
        problems.Hard.push(data[i].name);
        links.Hard.push(data[i].description);
      }
    }
    setProblems(tempProblems);
    setLinks(tempLinks);
  }

  const handleLinkClick = (link) => {
    onLinkClick(link);
  };

  const problemList = () => {
    // Map over the problems array and return a div for each element
    const array = Object.keys(problems).map((difficulty, index) => {
      return (
        <div key={index}>
          {" "}
          <h3>{difficulty}</h3>
          {problems[difficulty].map((problem, idx) => (
            <div
              key={idx}
              onClick={() => handleLinkClick(links[difficulty][idx])}
              className="problem-link"
            >
              {problem}
            </div>
          ))}
        </div>
      );
    });
    setProblemsArr([...array]);
    const favsArr = Object.keys(problems).map((difficulty, index) => {
      return (
        <div key={index}>
          {" "}
          <h3>{difficulty}</h3>
          {problems[difficulty].map((problem, idx) => {
            if (data[idx].favorite) {
              return (
                <div
                  key={idx}
                  onClick={() => handleLinkClick(links[difficulty][idx])}
                  className="problem-link"
                >
                  {problem}
                </div>
              );
            }
          })}
        </div>
      );
    });
    setFavoritesArr(favsArr)
  };

  useEffect(() => {
    setObjs();
    problemList();
  }, [data, fetchedData]);

  const favs = []

  for (let obj of fetchedData){
    if (obj.favorite){
      favs.push(
        <div
        id="spacing"
          onClick={() => handleLinkClick(obj.description)}
          className="problem-link"
        >
          {obj.name}
        </div>
      );
    }
  }

  return (
    <>
      <div className="difficultySidebar">
        <h2>
          {" "}
          <u>Difficulty</u>
        </h2>
        {problemsArr}
      </div>

      <div className="favoriteSidebar">
        <h2>
          <u>Favorites</u>
        </h2>
        <div>{favs}</div>
      </div>
    </>
  );
}

export default SideBar;
