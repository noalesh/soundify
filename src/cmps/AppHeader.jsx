import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}
//TODO:Add search bar in the header 
	return (
		<header className="app-header full">
			<nav>
				<NavLink to="/" className="logo">
					Logo
				</NavLink>
				
				
                {user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}

				{!user && <NavLink to="login" className="login-link">Login</NavLink>}
				{!user && <NavLink to="login" className="login-link">Sign-Up</NavLink>}
				

			</nav>
		</header>
	)
}
