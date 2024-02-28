import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Chat from '../components/chat/Chat';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</>
	);
};
export default Router;
