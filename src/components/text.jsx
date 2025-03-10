import React, { useState } from "react"

import Btn from "./Btn"
import Alert from "./alert"

const Textbar =(props)=>{

    // Css Start From Here
    const styles = {
        main:
        {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'40vh'
        },
        textarea:
        {
            backgroundColor:'#D3D3D3',
            border:'2px solid black',
            fontSize:'20px',
            padding:'10px',
        },
        down:
        {
            display:'flex',
            flexDirection:'column',
            position:'relative',
            left:'21%',
            width:'60%',

        },
        btn:
        {
            display:'flex',
            gap:'10px',
            justifyContent:'center',
        }
    }

    // functionality start from here 

    const [text , setText] = useState('')
    const [word , setWord] = useState(0);
    function capital(){

        setText(text.toUpperCase());
        alert('upper');

        
    }
    function lower(){

        alert('lower');
        setText(text.toLowerCase());
        
    }
    function clear(){

        alert('clear');
        setText('');
        setWord(0);
    }
    function removeSpace(){

        alert('removeSpace');
        setText(text.replace(/\s+/g, ''))
        

    }
    function handleChange(e){


        setText(e.target.value)
        const totalWord = text.trim().split(/\s+/);
        setWord(text.trim()=== '' ? 0 : totalWord.length)
    }


    



        return(
            

            <>

                <div style={styles.main }>
                    <h1>Enter The Text To Anaylize Below</h1>
                    <textarea cols={80} rows={5} placeholder="Enter Text"style={styles.textarea} value={text} onChange={handleChange} />
                </div>

            {text !== '' &&

                <div style={styles.btn}>
                    <Btn title='UpperCase' func={capital} />
                    <Btn title='LowerCase' func={lower} />
                    <Btn title='Clear' func={clear}/>
                    <Btn title='RemoveSpace' func={removeSpace}/>
                </div> 
            }
                                

                <div style={styles.down}>
                    <h1>Your Text Summary</h1>
                    <h3>Total Alphabets = {text.length}</h3>
                    <h3>Total Words = {word}</h3>
                </div>

            </>


        )


}

export default Textbar