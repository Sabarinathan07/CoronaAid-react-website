import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Button.css';
// import { Link } from 'react-router-dom';

const LogoutButton = () => {
	const { getLoggedIn } = useContext(AuthContext);
	const history = useNavigate();

	async function logout() {
		await axios.get('http://localhost:5000/auth/logout');
		await getLoggedIn();
		history.push('/');
	}
	return (
		<button className="btn" onClick={logout}>
			Logout
		</button>
	);
};

export default LogoutButton;
