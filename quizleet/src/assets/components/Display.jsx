import React, { useState } from 'react';
import '../../index.css'
import links from './SideBar.jsx'

function Display({ iframeSource }) {
//   const [count, setCount] = useState(0)

  return (
    <>
 {/* <div className='container'> */}

<div className='leetCode'>
<iframe src={iframeSource} width='520vw' height='100%'> </iframe>
</div>
<div>
<textarea className='textbox' placeholder="Enter code here..." width="30vw" height="50%"></textarea>
<button className = 'button'>Save</button>
<button className = 'button'>Show History</button>
<button className = 'button'>Favorite</button>
</div>

 {/* </div> */}

    </>
  )
}

export default Display