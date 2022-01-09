import {Link} from 'react-router-dom'

const Welcome = () => {
    return (  
        <nav className="welcome">
           
          
               
               <div><Link to="/prorata" >Prorata</Link></div>
               <div><Link to="/tax" >Tax</Link></div> 
              
               <div><Link to="/discount" >Discount</Link></div> 
               <div><Link to="/cashcount" >Cash Counter</Link></div> 
             
            
          
        </nav>
    );
}
 export default Welcome