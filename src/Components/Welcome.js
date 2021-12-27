import {Link} from 'react-router-dom'

const Welcome = () => {
    return (  
        <nav className="welcome">
            <h1>Menu</h1>
          
               
               <div><Link to="/prorata" >Prorata</Link></div>
               <div><Link to="/tax" >Tax</Link></div> 
              
               <div><Link to="/discount" >Discount</Link></div> 
            
          
        </nav>
    );
}
 export default Welcome