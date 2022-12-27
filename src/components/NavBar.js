import { Link } from 'react-router-dom'
// import * as userService from '../utilities/users-service'
// import {getUser} from '../utilities/users-service'



const NavBar = ({user, setUser}) => {
    // const [user,  setUser] = useState(getUser())
    {console.log(user)}
    // const handleLogOut = () => {
    //     userService.logOut()
    //     setUser(null)
    // }
    return(
        <nav className='navbar'>
            <h1>Hello {user.name}</h1>
        {/* <div className='navlogo'>
            <img className='logo' src={logo} alt='Logo'/>
        </div>
        <div className='navmenu'>
            {!user ? <Link to='/auth'>SignUp</Link> : null}
            <Link to='/about'>{" "}{" "}About</Link>
            {user ? <><span className='navname'>  Welcome, {user.name} <Link className='navname' to=''>Log Out</Link></span></> : ''}
        </div> */}
    </nav>
    )
}

export default NavBar