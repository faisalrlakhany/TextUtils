

const Navbar = ()=>{


    const styles = {
        main:
        {
            display:'flex',
            justifyContent:'space-between',
            backgroundColor:'lightGray'
        },
        leftdiv:
        {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',    
            gap:'20px',
            marginLeft:'30px'

        },
        links:
        {
            textDecoration:'none',
            fontSize:'20px',
            marginLeft:'10px',
            color:'black',
        }
    }
    

    


    return(

            <div style={styles.main} >
                <div style={styles.leftdiv}>
                    <h1>Faisal</h1>
                    <a href="#" style={styles.links}>Home</a>
                    <a href="#" style={styles.links}>About</a>
                </div>

            </div>           
                
    )
}






export default Navbar