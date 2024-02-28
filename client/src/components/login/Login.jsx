import { socket } from '../../sockets/socket';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	// messages
	// const [allMessages, setAllMessages] = useState([]);

	// useEffect(() => {
	// 	socket.on('responseForm', message => {
	// 		setAllMessages([...allMessages, message]);
	// 	});
	// }, [allMessages]);

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
	const name = event.target.name.value;
	socket.emit('users', name);
	navigate('/chat');
};
export default Login;

// {
// 		state: {
// 			id: socket.id,
// 			user: name
// 		}
// 	}
