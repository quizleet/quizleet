import React, { useState, useEffect, useLayoutEffect } from "react";
import "./index.css";
import Display from "./assets/components/Display.jsx";
import Title from "./assets/components/Title.jsx";
import SideBar from "./assets/components/SideBar.jsx";

function App() {
  const [data, setData] = useState([]);
  const [iframeSource, setIframeSource] = useState("");
  const [currentProblem, setCurrentProblem] = useState({});
  const [staticData, setStaticData] = useState([]);
  const [isFav, setFav] = useState(false);
  const [code, setCode] = useState("")
  

  // fetchData function that gets all problems from database
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api");
      const dataBase = await response.json();
      // console.log("database", dataBase);

      setData(dataBase);

      // await setIframeSource(dataBase[0].description);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  // invoke GET request for database problems
  useEffect(() => {
    fetchData();
    if (staticData.length === 0) setStaticData(data);
  }, []);

  
  const updateCode = (e) => {
    const newCode = code + e.target.value;
    setCode(newCode)
    console.log(code)
  }
  const editFavorite = async () => {
    const newObj = Object.assign({}, currentProblem);
    newObj.favorite = !currentProblem.favorite;
    setCurrentProblem(newObj);
    setFav(newObj.favorite)

    const passObj = {
      name: newObj.name,
      favorite: newObj.favorite,
    };
    try {
      const response = await fetch("http://localhost:3000/api/favorite", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passObj),
      });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    fetchData();
  };



  const handleLinkClick = (link) => {
    setIframeSource(link); // Update iframe source
    for (let obj of data) {
      if (obj.description === link) {
        setCurrentProblem(obj);
        setFav(obj.favorite)
        break;
      }
    }
  };
  setTimeout(() => {
    if (iframeSource === "") {
      // setCurrentProblem(data[0]);
      // setIframeSource(data[0].description);
      setStaticData(data);
      // setFav(data[0].favorite)
      for (let obj of data){
        console.log('--------------')
        if (obj.difficulty === "Easy"){
          console.log('found easy!');
          setIframeSource(obj.description);
          setFav(obj.favorite);
          setCurrentProblem(obj)
          break;
        }
      }
    }
  }, 20);

  console.log("current problem", currentProblem);
  return (
    <>
      {/* <div class="container">  */}
      <Title />
      <div className="container">
        <Display iframeSource={iframeSource} editFavorite={editFavorite} isFav={isFav} updateCode={updateCode}/>
        <SideBar data={staticData} onLinkClick={handleLinkClick} fetchedData = {data} />
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
