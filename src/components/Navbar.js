import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export function Navbar() {
	const [logged, setLogged] = useContext(AuthContext)
	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem('creds')
		setLogged(false)
		navigate('/')
	}

	return (
		<nav className="container">
			<Link to="/">
				<h1 id="logo">Logo</h1>
			</Link>
			<ul id="menu">
				<Link to="/">
					<li>Home</li>
				</Link>
				{logged ? (
					<>
						<Link to="/posts">
							<li>Posts</li>
						</Link>
						<button onClick={logout}>Logout</button>
					</>
				) : (
					<Link to="/login">
						<button>Login</button>
					</Link>
				)}
			</ul>
		</nav>
	)
}
