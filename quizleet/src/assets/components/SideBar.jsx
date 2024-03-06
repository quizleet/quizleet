import React, { useState, useEffect } from 'react';
import '../../index.css'

function SideBar({ onLinkClick }) {
//   const [count, setCount] = useState(0)

// const fetchData = async () => {
//   const response = await fetch("http://localhost:3000/api");

//   if (response.status === 200) {
//     const body = await response.json();
//     console.log('BODY:', body);
//   }
// };

// fetchData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api");
        const dataBase = await response.json();
        console.log("This is our database ", dataBase);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

const diffProblems = {
  Easy: ['Two-Sum','palindrome','3-sum'],
  Medium: ['add-two','palindrome','3-sum'], 
  Hard: ['Two-Sum','palindrome','3-sum']
}


const links = {
  Easy: ['https://leetcode.com/problems/two-sum/description/','https://leetcode.com/problems/valid-palindrome/description/','https://leetcode.com/problems/3sum/description/'],
  Medium: ['https://leetcode.com/problems/add-two-numbers/description/'],
  Hard:[]
};

const handleLinkClick = (link) => {
  onLinkClick(link);
};

const problemList = () => {
  // Map over the problems array and return a div for each element
  return Object.keys(diffProblems).map((difficulty, index) => {
    return ( <div key={index}> <h3>{difficulty}</h3>
    {diffProblems[difficulty].map((problem, idx) => (
        <div key={idx} onClick={() => handleLinkClick(links[difficulty][idx])} className="problem-link">
        {problem}
      </div>
  ))}
    </div> 
    )
  })
};
  return (
    <>


 <div  className = 'difficultySidebar'>
  <h3>Difficulty</h3>
 {problemList()}
  </div>

  <div  className = 'favoriteSidebar'>
  Favorite
  <div>Two-Sum</div>
  </div>


    </>
  )
}

export default SideBar