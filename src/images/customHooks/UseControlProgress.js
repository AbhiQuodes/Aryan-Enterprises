import { useState } from "react";

const UseControlProgress =(progress,setProgress)=>{
     setInterval(() => {
  setProgress((previousProgress) => {
    if (previousProgress >= 100) {
      clearInterval(UseControlProgress);
      return;
    }
    return previousProgress + (Math.random() * (9 - 7) + 7) * 10;
    //generating numbers from  2 to 5
  });
  return [progress];
}, 500);
}

export default UseControlProgress;
