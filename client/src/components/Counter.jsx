const Counter = ({ counter, setCounter }) => {
	return (
		<>
			<p>{counter}</p>
			<button onClick={() => sum(counter, setCounter)}>+1</button>
			<button onClick={() => reset(counter, setCounter)}>reset</button>
			<button onClick={() => rest(counter, setCounter)}>-1</button>
		</>
	);
};
const sum = (counter, setCounter) => {
	setCounter(counter + 1);
};
const reset = (counter, setCounter) => {
	setCounter((counter = 0));
};
const rest = (counter, setCounter) => {
	setCounter(counter - 1);
};
export default Counter;
