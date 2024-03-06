import React, { useState } from 'react';
import '../../index.css'
import links from './SideBar.jsx'

function Display({
  iframeSource,
  fetchData,
  currentProblem,
  editFavorite
}) {
  //   const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='container'> */}

      <div className="leetCode">
        <iframe src={iframeSource} width="520vw" height="100%">
          {" "}
        </iframe>
      </div>
      <div className="codeDiv">
        <textarea
          className="textbox"
          placeholder="Enter code here..."
          width="30vw"
          height="50%"
        ></textarea>
        <div className="buttons">
          <button className="button">Save</button>
          <button className="button">Show History</button>
          <button className="button" onClick={()=> {editFavorite()}}>Favorite</button>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Display