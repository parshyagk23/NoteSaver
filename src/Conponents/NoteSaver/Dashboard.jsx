import React , { useState } from 'react'
import Form from './Form'
import NoteStatus from './NoteStatus'
import styled from 'styled-components'


const Dashboard = () => {
  const [Onchange,setOnchange] = useState('');
  const [isDelEdit ,setisDelEdit] =  useState(false)
  const [isDelEditText, setisDelEditText] = useState('');
  const [Notes ,setNotes] = useState([
    {
      id:Date.now() ,
      target: 'Dafault Note'
    },
  ]);

  const OnSubmitHandle= (e) =>{
    e.preventDefault();
    setNotes(prev => [...prev, { id:Date.now(),target:Onchange }])
    setOnchange('')
    console.log("From Submitted");
    
    setisDelEditText('Note Edited');
    setTimeout(() => {
      setisDelEdit(false)
    }, 2000);
  }
  const OnEditHandle= (id) =>{
    const Edit  = Notes.find((Notes)=>{ 
      if(Notes.id === id) {
        setOnchange(Notes.target) 
      }
    })
    OnDeleteHandle(id);
    setisDelEdit(true)
    setisDelEditText("Note Editing")
    setTimeout(() => {
      setisDelEdit(true)
    }, 1500);
  }
  const OnDeleteHandle= (id) =>{
    const updateNotes = Notes.filter((Notes)=>{
      return Notes.id!= id;
    })
    setNotes(updateNotes)
    setisDelEdit(true)
    setisDelEditText("Notes Deleteed")
    setTimeout(() => {
      setisDelEdit(false)
    }, 1500);
  
   
  }

  return (
    <Box>
        <Form  Notes={Notes} OnSubmitHandle={OnSubmitHandle} EditNotes={Onchange}  setOnchange={setOnchange} isDelEdit={isDelEdit} isDelEditText={isDelEditText} />
        <hr />
        <NoteStatus Notes={Notes} OnDeleteHandle={OnDeleteHandle}  OnEditHandle={OnEditHandle} />
    </Box>

  )
}

export default Dashboard

const Box = styled.div`
    display: flex;
    flex-direction: column ;
    gap: 30px;
    width: 850px;
    height: 500px;
    padding: 50px;
   
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 50px;

`