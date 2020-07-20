import React, { useState, useEffect } from "react";
import axios from "axios";
import {AxiosWithAuth} from "../utils/AxiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
    const getColors = () =>{
        AxiosWithAuth().get('http://localhost:5000/api/colors')
            .then(res=>{
                console.log(res);
                setColorList(res.data)
                console.log(colorList);
            })
            .catch(err=>{
                console.log(err);
            });
    }
    useEffect(()=>{
        getColors();
    },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors = {getColors} />
      <Bubbles colors={colorList} />
    </>
  );
}

export default BubblePage;
