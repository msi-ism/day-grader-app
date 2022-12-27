import { Link } from 'react-router-dom'
// import {getUser} from '../utilities/users-service'


const NavBar = ({user, setUser}) => {
    {console.log(user)}
    // const handleLogOut = () => {
    //     userService.logOut()
    //     setUser(null)
    // }
    return(
        <nav className='navbar'>
        <div className='navlogo'>
            <img className='logo' alt='Logo'/>
        </div>
        <div className='navmenu'>
            {user ? <><span className='navname'>  Welcome, {user.name} Log Out</span></> : ''}
        </div>
    </nav>
    )
}

export default NavBar