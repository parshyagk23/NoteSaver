
import styled from 'styled-components'

const Form = ({ OnSubmitHandle,EditNotes ,setOnchange , isDelEdit,isDelEditText}) => {
 
  return (
    <div>

    <FormSession isDelEdit={isDelEdit} onSubmit={OnSubmitHandle} >
    <input type="text"  placeholder='Write Note' value={EditNotes} onChange={(e)=>setOnchange(e.target.value) } required />    
    <div className='formnote'>
     <button>Add Note</button>   
      <div className='delEdit'>
        {isDelEdit? isDelEditText:''}
      </div>
    </div>
    </FormSession>    
    </div>
  )
}

export default Form

const FormSession = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: white;
    input{
        all: unset;
        
        padding: 10px;
        width: 600px;
        font-size: 20px;
        font-weight: 500;
        border: 2px solid white ;
        border-radius: 20px;
        

    }
    input::placeholder{
      color : white;
    }
    
    .formnote{
      display: flex;
      justify-content: space-between;
    }
    .delEdit{
      width: 200px;
      background: ${(props)=>props.isDelEdit? '#57db3358':''};
      border-radius: 20px;
      padding: 10px;
      font-size: 22px;
      font-weight: 500;
      text-align: center;
    }
    button{
        all:unset;
        width: 110px;
        background-color: #6f6ff7f4;
        border: 1px solid white;
        border-radius: 20px;
        padding: 10px;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
      background-color: #fff;
      color: black;
      font-size: 22px;
      font-weight: 500;
    }
`