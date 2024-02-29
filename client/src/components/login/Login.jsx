import { socket } from '../../sockets/socket';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<form onSubmit={event => handleSubmit(event, socket, navigate)}>
				<input type='text' name='name' />
				<button>Send</button>
			</form>
			<p></p>
		</>
	);
};
const handleSubmit = (event, socket, navigate) => {
	event.preventDefault();
	const username = event.target.name.value;
	socket.emit('login', username);
	navigate('/chat');
};
export default Login;
