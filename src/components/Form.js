import React, {useState} from 'react'



export default function Form(props) {
    const [text,setText] = useState("Enter Text here!");
    const [email,setEmail] = useState("");
    let Email='';
    const HandleClick=()=>{
        let a = text.toUpperCase();
        setText(a);
        props.showAlert('Text transform to uppercase','success')
    }
    const HandleClear=()=>{
        let a = "";
        setText(a);
        props.showAlert('Text cleard','success')
    }
    const HandleOnchange=(event)=>{
        setText(event.target.value);
    }
    const HandleExtract=()=>{
        Email='';
        let str_arr = text.split(' ');
        for(let i=0;i<str_arr.length;i++)
        {
            if(str_arr[i].includes('@'))
            {
                Email+=str_arr[i];
                Email+=" ";
            }
        }
        if(Email === ''){
            Email ="No Email found!"
        }
        else{
            props.showAlert('Email(s) has been extracted','success')
        }
        setEmail(Email);
    }


    return (

        <>
        <div style={{color: props.mode === 'light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3" >
                <textarea style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}} value= {text} className="form-control" onChange = {HandleOnchange} id="myBox" rows="5"></textarea>
            </div>
            <button className='btn btn-primary' onClick={HandleClick}>Convert</button>
            <button className='btn btn-primary mx-2' onClick={HandleClear}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={HandleExtract}>Extract</button>
        </div>
        <div style={{color: props.mode === 'light'?'black':'white'}}>
            <h1 >Your text Summary</h1>
            <p>{text.split(" ").length} words {text.length} chracters</p>
            <p>{text.split(" ").length * 0.008} Minutes required to read</p>
            <h4>Email(s) in text</h4>
            <p style={{color:"red"}}>{email}</p>
        </div>
        </>
    )
}
