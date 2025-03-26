import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignUp = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState('');
	const [bloodgroup, setBloodgroup] = useState('');
	const [gender, setGender] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVerify, setPasswordVerify] = useState('');

	const { getLoggedIn } = useContext(AuthContext);
	const history = useNavigate();

	async function signup(e) {
		e.preventDefault();

		try {
			const registerData = {
				fullname,
				email,
				age,
				bloodgroup,
				gender,
				phone,
				password,
				passwordVerify,
			};

			await axios.post('http://localhost:5000/auth/', registerData);
			await getLoggedIn();
			history.push('/');
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div>
			<h1>Become a Volunteer</h1>
			<form onSubmit={signup}>
				<input
					type="text"
					placeholder="Full Name"
					onChange={(e) => setFullname(e.target.value)}
					value={fullname}
				/>
				<input
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type="text"
					placeholder="Age"
					onChange={(e) => setAge(e.target.value)}
					value={age}
				/>
				<input
					type="text"
					placeholder="Blood Group "
					onChange={(e) => setBloodgroup(e.target.value)}
					value={bloodgroup}
				/>
				<input
					type="text"
					placeholder="Gender"
					onChange={(e) => setGender(e.target.value)}
					value={gender}
				/>
				<input
					type="text"
					placeholder="Phone"
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
				/>
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<input
					type="password"
					placeholder="Verify your Password"
					onChange={(e) => setPasswordVerify(e.target.value)}
					value={passwordVerify}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
