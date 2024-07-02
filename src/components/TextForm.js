
import React,{ useState } from "react"
// import { useNavigate } from "react-router";



export default function TextForm(props) {

    const handleUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLOclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleDltclick = ()=>{
        let newText = 'Enter the text';
        setText(newText);
    }
    const handleCopyclick = ()=>{
        let newText = document.getElementById('Box1');
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied To Clipboard", "success");
   
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    
    const[text, setText] = useState('Enter the text');
    
  return (
  <>
    <div className="container" style = {{color: props.mode === 'dark'?'white' :'black'}}>
<div>
    <h1>{props.heading}</h1>
</div>
<div className="Box1">
  
  <textarea className="form-control" style={{borderColor: "black solid", backgroundColor:props.mode ==='dark'?'#010b1a':'white',color:props.mode === 'dark'?'white' :'black'}} value={text} onChange={handleOnchange} id="Box1" rows="6"></textarea>
  <br></br>
  <button type="button" className="btn btn-primary mx-1" onClick={handleUPclick}>To Upper Case</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleLOclick}>To Lower Case</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleDltclick}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy Text</button>
  
</div>
    </div>
  <div className="container" style = {{color: props.mode === 'dark'?'white' :'black'}}>
    <h4>This is my Text Summery </h4>
    <p><b>Words = {(text.split(" ").length)}</b> <br></br> <b>Character = {(text.length)}</b></p>
    
  </div>
  </> 
  )
}
