import {Link} from 'react-router-dom';
import './Nav.css';
function Nav() {
  return (
    <>
    <ul>
<Link to ='/'><li>Home</li></Link>
<Link to ='/About'><li>About</li></Link>
<Link to ='/Contact'><li>Contact</li></Link>
    { /* <a href='/'><li>Home</li></a>
    <a href='/'><li>Contact</li></a>
  <a href='/'><li>About</li></a>*/}
    </ul>
    </>
  );
}

export default Nav;
