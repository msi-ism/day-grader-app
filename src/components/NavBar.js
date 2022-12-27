import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import logo from '../images/grade.png'



const NavBar = ({user, setUser}) => {
    {console.log(user)}
    // const handleLogOut = () => {
    //     userService.logOut()
    //     setUser(null)
    // }
    return(
        <nav className='navbar'>
            <div className='navlogo'>
                <img className='logo' src={logo} alt='Logo'/>
            </div>
            <div className='navmenu'>
                {user ? <><span className='navname'>  Welcome, {user.name} Log Out</span></> : ''}
            </div>
        </nav>
    )
}

export default NavBar