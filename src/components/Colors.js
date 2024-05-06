import React from "react";

function Colors(props) {
  const {colorData , setColor}= props;
  return (
    <>
      <ul className="colors ps-0 mb-2">

{
  colorData && colorData?.map((item, index)=>{
    return(
      <li onClick={()=>setColor(item?._id)}  style={{backgroundColor:item.title}} key={index}></li>
    )
  })
}

    
      </ul>
    </>
  );
}

export default Colors;
