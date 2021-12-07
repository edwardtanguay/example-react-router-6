import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Welcome</Link></li>
				<li><Link to="register">Register</Link></li>
				<li><Link to="login">Login</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;