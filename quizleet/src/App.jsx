import React, { useState, useEffect } from "react";
import "./index.css";
import Display from "./assets/components/Display.jsx";
import Title from "./assets/components/Title.jsx";
import SideBar from "./assets/components/SideBar.jsx";

function App() {
  const [iframeSource, setIframeSource] = useState("");
  const [data, setData] = useState([]);
  const [currentProblem, setCurrentProblem] = useState({});

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/api");
      const dataBase = await response.json();
      console.log("database", dataBase);
      setData(dataBase);

      // ideally we would want to do the problems "Easy,Medium,Hard" obj state in this main app component for a reason like this, instead we will have to do 
      // for loop and find first easy object in data array and set to current problem and iframe source
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].difficulty === "Easy") {
          console.log(dataBase[i])
          setIframeSource(dataBase[i]["description"]);
          setCurrentProblem(dataBase[i]);
          break;
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function saveData() {
    const passingObj = {
      name: currentProblem.name,
      user_rating: currentProblem.user_rating,
      history: currentProblem.history,
      newCode: currentProblem.newCode
    };

    try {
      const response = await fetch("http://localhost:3000/api/save", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passingObj)
      });
      const dataBase = await response.json();
      

      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const editFavorite = async() => {
    const newObj = Object.assign({}, currentProblem)
    newObj.favorite = !currentProblem.favorite
    setCurrentProblem(newObj)
    console.log('---------------',currentProblem)
    const passObj = {
      name: newObj.name,
      favorite: newObj.favorite
    }
     try {
      const response = await fetch("http://localhost:3000/api/favorite", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passObj)
      });
      const dataBase = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <Title />
      <div className="container">
        <Display iframeSource={iframeSource} fetchData={fetchData} currentProblem={currentProblem} editFavorite={editFavorite}/>
        <SideBar data={data} onLinkClick={handleLinkClick} />
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
  );
}

export default App;
