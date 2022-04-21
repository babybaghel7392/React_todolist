import React from "react";

const Plan=(props)=>{


  return (
    <>
    <div className="todo-style ">
    <button className="btn btn-warning mt-2" onClick={()=>
    {
      props.onSelect(props.id);
    }}>X</button>
        <h6 >{props.text}</h6>              
    </div>
    </>
  )
}

export default Plan;

