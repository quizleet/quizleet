import React, { useState, useEffect } from 'react';
import '../../index.css'

function SideBar({ onLinkClick, data }) {
//   const [count, setCount] = useState(0)

// const fetchData = async () => {
//   const response = await fetch("http://localhost:3000/api");

//   if (response.status === 200) {
//     const body = await response.json();
//     console.log('BODY:', body);
//   }
// };

// fetchData();
// const [data, setData] = useState([]);
const [problems, setProblems] = useState({
  Easy: [],
  Medium: [], 
  Hard: []
})
const [links, setLinks] = useState({
  Easy: [],
  Medium: [], 
  Hard: []
})

const tempProblems = {
  Easy: [],
  Medium: [], 
  Hard: []
}

const tempLinks = {
  Easy: [],
  Medium: [], 
  Hard: []
}
for(let i=0; i<data.length; i++){
        if (data[i].difficulty === 'Easy') {
          problems.Easy.push(data[i].name);
          links.Easy.push(data[i].description);
        }
        else if (data[i].difficulty === 'Medium') {
          problems.Medium.push(data[i].name);
          links.Medium.push(data[i].description);
        }
        else if (data[i].difficulty === 'Hard') {
          problems.Hard.push(data[i].name);
          links.Hard.push(data[i].description);
        }
      } 
    
  setProblems(tempProblems);
  setLinks(tempLinks);




  console.log("problems: ", problems);
  console.log("links: ", links);




const handleLinkClick = (link) => {
  onLinkClick(link);
};

const problemList = () => {
  // Map over the problems array and return a div for each element
  return Object.keys(problems).map((difficulty, index) => {
    return ( <div key={index}> <h3>{difficulty}</h3>
    {problems[difficulty].map((problem, idx) => (
        <div key={idx} onClick={() => handleLinkClick(links[difficulty][idx])} className="problem-link">
        {problem}
      </div>
  ))}
    </div> 
    )
  })
};
const problemsArr = problemList()

  return (
    <>


 <div  className = 'difficultySidebar'>
  <h3>Difficulty</h3>
 {problemsArr}
  </div>

  <div  className = 'favoriteSidebar'>
  Favorite
  <div>Two-Sum</div>
  </div>


    </>
  )
}

export default SideBar