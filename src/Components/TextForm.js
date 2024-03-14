import React, {useState} from 'react';

export default function TextForm(props){
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase was clicked","success");
    }
    const handledownClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Lowercase was clicked","success");
     }

     const handleChangeFont = ()=> {
        let newText = ({text}.italics());
        setText(newText);
     }

    const handleOnChange = (event)=>{
       // console.log("Changed");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    
    const [text, setText] = useState("");
    //   setText("My name is Sourabh");

    return (
        <div className={`text-${props.mode==='light'?'#18124E':'white'}`} > 
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text}  style={{backgroundColor:props.mode==='dark'?'#18124E':'white', color:props.mode==='light'?'black':'white'}} placeholder='Enter your text here' onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Change to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledownClick} >Change to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleChangeFont} >Change to Italic</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Content</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>


            <div className="className my-3" >
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>Time take to read a whole paragraph : {0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length}min</p>
                <p>Preview:</p>
                <p>{text.length > 0 ? text : 'Please enter your text here'}</p>
            </div>
        </div>   
    )
}