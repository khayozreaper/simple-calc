import {Link} from 'react-router-dom'

const Welcome = () => {
    return (  
        <nav className="welcome">
            <h1>Menu</h1>
            <div className="links">
               
               <Link to="/prorata" >Prorata</Link>
               
              
            </div>
            <Link to="/tax" >Tax</Link>
        </nav>
    );
}
 export default Welcome