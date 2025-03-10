

function Alert(props){

    const main = {
        width:'100%',
        backgroundColor:'lime',
        padding:'4px',
        fontSize:'18px',
        borderRadius:'10px'
    }
    const span = {
        marginLeft:'10px',
        fontSize:'20px',
        fontWeight:'bold',
        paddingRight:'8px'
    }


    return(
        <>
        
        {props.alert && <div style={main}>
                <p><span style={span} >{props.alert.type}</span> {props.alert.message}</p>
            </div>
        }
            
        </>
    )




}


export default Alert