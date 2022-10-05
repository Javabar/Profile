import football from  "../slideshow/football.jpg"
import hiking from  "../slideshow/hiking.jpg"
import travelling from  "../slideshow/travelling.jpg"
import { useState } from "react"


export const SliderData = [
    {
      img: football,
      description: "Football tournement",
    },
    {
      img: hiking,
      description: "hiking",

    },
    {
      img: travelling,
      description: "travelling",

    },
    {
      image:
        'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
  ];


  
// const SliderData = () => {
//   const [] = useState ([
//     {
//       img: football,
//       description: "Aryeh Looking down at humans",
//     },
//     {
//       img: hiking,
//       description: "Aryeh Looking down at humans",
//     },
//     {
//       img: travelling,
//       description: "Aryeh Looking down at humans",
//     },
//   ])
// }
//   export default SliderData;