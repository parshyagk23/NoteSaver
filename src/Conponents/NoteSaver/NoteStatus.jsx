import React from "react";
import styled from "styled-components";

const NoteStatus = ({ Notes,OnEditHandle,OnDeleteHandle }) => {

  

  return (
    <div  >
      <h2 style={{ color: "blue", fontSize: "30px", letterSpacing: "5px" }}>
        Notes Previews
      </h2>
      {Notes.map((item => 
        <Box2 key={item.id}>
          <div  className="Note">
            <p >{item.target} </p>
          </div>
          <div>
            <button style={{ background:'#3344db' }} onClick={()=>OnEditHandle(item.id)}>Edit</button>
          </div>
          <div>
            <button style={{ background:'#db3333' }} onClick={()=>OnDeleteHandle(item.id)} >Delete</button>
          </div>
        </Box2>
      ))}
    </div>
  );
};

export default NoteStatus;

const Box2 = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  .Note p {
    width: 500px;
    padding: 10px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: justify;
  }

  button {
    all: unset;
    width: 80px;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 20px;
    cursor: pointer;
    
  }
`;
