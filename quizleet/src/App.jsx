import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <div class="container">  */}
 <div className='title'>QuizLeet</div>
 {/* </div> */}
 <div className='container'>

 <div  className = 'difficultySidebar'>
  Difficulty
  <div>Easy</div>
  <div>Two-Sum</div>
  </div>
<div className='leetCode'>
<iframe src="https://leetcode.com/problems/two-sum/description/" width='50%' height='50%'> </iframe>
</div>
<div className='replit'>
<iframe src="http://csbin.io/" width="50%" height="50%"></iframe>
</div>
 </div>

    </>
  )
}

export default App
