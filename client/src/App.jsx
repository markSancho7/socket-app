import { GlobalStyles } from './styles/GlobalStyles';
import { socket } from './sockets/socket';
import { useEffect, useState } from 'react';
import Counter from './components/Counter';
const App = () => {
	const [counter, setCounter] = useState(0);
	// console.log(socket);
	useEffect(() => {
		socket.on('response', counter => {
			setCounter(counter);
		});
	}, []);
	useEffect(() => {
		socket.emit('message', counter);
	}, [counter]);
	return (
		<>
			<GlobalStyles />
			<p>numero de usuario: {socket.id}</p>

			<Counter counter={counter} setCounter={setCounter}></Counter>
			<form onSubmit={event => handleSubmit(event, socket)}>
				<input type='text' name='name' />
				<button>Send</button>
			</form>
		</>
	);
};
const handleSubmit = (event, socket) => {
	event.preventDefault();
	const name = event.target.name.value;
	socket.emit('message', name);
	event.target.reset();
};

export default App;
