import React, { useState, useEffect } from 'react';
import './index.css'
import Display from './assets/components/Display.jsx'
import Title from './assets/components/Title.jsx'
import SideBar from './assets/components/SideBar.jsx'


function App() {
  const [iframeSource, setIframeSource] = useState('https://leetcode.com/problems/two-sum/description/');
  const [data, setData] = useState([]);

const [currentProblem, setCurrentProblem] = useState({})

async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api");
        const dataBase = await response.json();
        console.log('database', dataBase);
        setData(dataBase);
        
        
        setData(dataBase);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLinkClick = (link) => {
    setIframeSource(link); // Update iframe source
  };
  return (
    <>
 {/* <div class="container">  */}
 < Title />
 <div className = 'container'> 
 <Display  iframeSource={iframeSource} />
 <SideBar  data={data} onLinkClick={handleLinkClick} />
 </div>
 {/* </div>
 <div className='container'>

 <div  className = 'difficultySidebar'>
  Difficulty
  <div>Easy</div>
  <div>Two-Sum</div>
  </div>
<div className='leetCode'>
<iframe src="https://leetcode.com/problems/two-sum/description/" width='520vw' height='100%'> </iframe>
</div>
<div className='csbin'>
<iframe src="http://csbin.io/" width="400vw" height="100%"></iframe>
</div>
 </div> */}


    </>
  )
}

export default App
