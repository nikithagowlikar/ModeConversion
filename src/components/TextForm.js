import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("upper case clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=()=>{
    // console.log("upper case clicked" +text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleToClear=()=>{
    // console.log("upper case clicked" +text);
    let newText=" ";
    setText(newText)
  }
  const handleToInverse=()=>{
    // console.log("upper case clicked" +text);
    let newText=" ";
    let i=0;
    while(i<text.length){
      let char=text.charAt(i);
      if(char===char.toLowerCase()){
        char=char.toUpperCase();
      }
      else{
        char=char.toLowerCase();
      }
      newText+=char;
      i++;
    }
    setText(newText)
  }
 
  const handleOnChange=(event)=>{
    // console.log("onchanged");
    setText(event.target.value);
  }
  const [text,setText] = useState("");
  return (
    <>
    <div> 
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" placeholder='enter text here' rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleToInverse}>Inverse Case</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleToCapitalize}>Capitalized case</button> */}
        </div>
    </div>
    <div className="container">
      <h1>Your Summary..</h1>
      <p>{text.split(" ").length}word and {text.length} characters</p>
      {/* 1  word can be read in 0.08 second */}
      <p>{0.08*text.split(" ").length} time taken to read words</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
