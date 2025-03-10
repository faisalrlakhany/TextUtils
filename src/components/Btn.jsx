


const Btn = (props)=>{

    const btn = {

        padding:'14px 10px',
        fontSize:'16px',
        borderRadius:'10px',
        width:'10%',
        color:'white',
        backgroundColor:'purple',
    }


    return(
        <>

            <button style={btn} onClick={props.func} >{props.title}</button>


        </>
    )

}


export default Btn