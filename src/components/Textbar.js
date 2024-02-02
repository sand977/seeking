import React, {useState} from 'react'

export default function Textbar(props) {
  const [text, setText] = useState("");
  const [showpas, setshowpas] = useState(false);
  const [textpas, settextpas] = useState('');

  // const showing = () => {
   
  //     setshowpas({
  //       password: password,
  //       text: text
  //     });
   
  // }

  const togglepass = () => {
 setshowpas(!showpas)
  }

  // const [answer, setAnswer] = useState('');
  // const [btntext, setbtntext] = useState("change into dark Mode");
  // const [mystyle, setmystyle] = useState({
  //   backgroundColor: "black",
  //   color: "white"
  // });

  // const stylecss = () => {
  //   if(mystyle.color === "white"){
  //     setmystyle({
  //       backgroundColor: "white",
  //       color: "black"
  //     })
  //     setbtntext("Enable Light Mode");
  //   }
  //   else{
  //     setmystyle({
  //       backgroundColor: "black",
  //       color: "white"
  //     })
  //   }
  //   setbtntext("Enable Dark Mode")
  // };

//   const onchangepass = (e) => {
// settextpas(e.target.value)
//   } its for password hide or show

  const onchangehandle = (event) => {
    // console.log("this is onchange");
    setText(event.target.value)
  }
  // const onchangehandl = (event) => {
    //   // console.log("this is onchange");
    //   setAnswer(event.target.value)
    // }
    
    const upclick = () => {
      // console.log("this is uppercase button");
      let newtext = text.toUpperCase();
      setText(newtext)
      props.showalert("converted to uppercase");
    }
    
    const loclick = () =>  {
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showalert("converted to lowercase");
      
    }
    const clrtxt = () =>  {
      let newtext = "";
      setText(newtext)
      props.showalert("clear text");
      
    }
    const speak = () =>  {
      let newtext = new SpeechSynthesisUtterance();
      newtext.text = text;
      window.speechSynthesis.speak(newtext);
      
    }
    
    // const handlegetanswer = () => {
      // if(text){
        // setAnswer(`answer to ${text}`)
        // }
        // };
        
        const removespace = () => {
          let newtext = text.split(/[  ] + /);
          setText(newtext.join(" "))
          props.showalert("remove extra spaces");
        }
        

  
  return (
    <>
    <div className='container  ' style={{color: props.mode === "light" ? "black" : "white"}} >
    <h1 >{props.heading}</h1>
    <div className="mb-3">
   <textarea className='form-control' style={{backgroundColor: props.mode === "light" ? "white": "grey", color: props.mode === "light" ? "black" :" white"}}  onChange={onchangehandle} value={text} rows="8"></textarea>
   {/* <input type="text" value={text} onChange={onchangehandl}/> */}
   <input type={showpas ? "text": "password"} value={textpas} onChange={(e)=>settextpas(e.target.value)} />
   <button type='button' onClick={togglepass} className='btn btn-primary m-2'>{showpas ? 'hide' : 'show'}</button>
    </div>
<br />
   <button className='btn btn-secondary m-3' onClick={upclick}>Uppercase</button>
   <button className='btn btn-secondary m-3'  onClick={loclick}>Lowercase</button>
   <button className='btn btn-secondary m-3' onClick={clrtxt}>clear text</button>
   <button className='btn btn-secondary m-3' onClick={speak}>Speak</button>
   {/* <button className='btn btn-secondary' onClick={handlegetanswer}>Answer</button> */}
   {/* <button type='button' onClick={stylecss} className='btn btn-primary m-2'>{btntext}</button> */}
   <button type='button' onClick={removespace} className='btn btn-primary m-2'>remove Space</button>
 
   {/* <p>{answer}</p> */}

    </div>
    <div className="container my-4" style={{color: props.mode === "light" ? "black" : "white"}}>
      <h2>Your text summary</h2>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>preview </h2>
      <p>{text.length>0 ? text:"enter something to preview it"}</p>

      
    </div>
    </>
  )
}



