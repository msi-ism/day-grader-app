import { Link } from 'react-router-dom'
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
            <h1>Hello, {user.name}!</h1>
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