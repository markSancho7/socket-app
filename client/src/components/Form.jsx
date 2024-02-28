import { socket } from '../sockets/socket';

const Form = () => {
	return (
		<>
			<form onSubmit={event => handleSubmit(event, socket)}>
				<input type='text' name='name' />
				<button>Send</button>
			</form>
			<p></p>
		</>
	);
};
const handleSubmit = (event, socket) => {
	event.preventDefault();
	const name = event.target.name.value;
	socket.emit('form', name);
	event.target.reset();
};
export default Form;
