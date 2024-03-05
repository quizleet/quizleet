// import { useState } from 'react'
import '../../index.css'

function SideBar({ onLinkClick }) {
//   const [count, setCount] = useState(0)

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




