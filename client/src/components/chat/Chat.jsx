import { useEffect, useState } from 'react';
import { socket } from '../../sockets/socket';
import { StyledChat } from './styles';
import { v4 } from 'uuid';

const Chat = () => {
	// users
	const [allUsers, setAllUsers] = useState([]);
	const [allMessages, setAllMessages] = useState([]);
	useEffect(() => {
		socket.on('responseUsers', user => {
			setAllUsers([...allUsers, user]);
		});
	});
	useEffect(() => {
		socket.on('responseMessages', message => {
			setAllMessages([...allMessages, message]);
		});
	});

	return (
		<>
			<StyledChat>
				<div>
					<h1>Usuarios conectados</h1>
					{allUsers.map(user => (
						<p key={user}>{user}</p>
					))}
				</div>
				<div>
					<form
						onSubmit={event => {
							handleSubmit(event);
						}}
					>
						<label>enviar mensaje</label>
						<input type='text' name='message' />
						<button>send</button>
					</form>
				</div>
				<div>
					<h1>CHAT</h1>
					{allMessages.map(message => (
						<div key={message.message.id}>
							<p>{message.message.user}</p>
							<p>{message.message.info}</p>
						</div>
					))}
				</div>
			</StyledChat>
		</>
	);
};

const handleSubmit = event => {
	event.preventDefault();
	const message = event.target.message.value;
	console.log(message);
	socket.emit('message', {
		message: {
			id: v4(),
			user: socket.id,
			info: message
		}
	});
	// setAllMessages([
	// 	...allMessages,
	// 	{
	// 		message: {
	// 			userId: socket.id,
	// 			infoMessage: message
	// 		}
	// 	}
	// ]);
};
export default Chat;
