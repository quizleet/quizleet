import React, { useState } from 'react';
import '../../index.css'
import links from './SideBar.jsx'

function Display({ iframeSource, editFavorite, isFav, updateCode }) {
//   const [count, setCount] = useState(0)
console.log('isfav', isFav)

const favStyles = {
  backgroundColor: !isFav ? "#242424" : "#F79F1B",
  color: !isFav ? "white" : "black",
  border: !isFav ? "1px solid white" : ""
};

  return (
    <>
      {/* <div className='container'> */}

      <div className="leetCode">
        <iframe src={iframeSource} width="520vw" height="100%">
          {" "}
        </iframe>
      </div>
      <div className='codeDiv'>
        <textarea
          className="textbox"
          placeholder="Enter code here..."
          width="30vw"
          height="50%"
          onChange={(e)=> updateCode(e)}
        ></textarea>
        <div className="buttons">
          <button className="button">Save</button>
          <button className="button">Show History</button>
          <button
            className="button"
            onClick={() => editFavorite()}
            style={favStyles}
          >
            Favorite
          </button>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Display