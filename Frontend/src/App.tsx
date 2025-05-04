import {useState} from "react";


export default function App() {

	const [diceValue, setDiceValue] = useState<number>(11)
	const [rollValue, setRollValue] = useState<number>(null)

	function changeDiceValue(e) {
		setDiceValue(e.target.value)
	}
	
	function rollDice() {
		setRollValue(Math.floor(Math.random() * diceValue) + 1)
		
	}
	return(
		
		<>
			<h1>the best dice roller</h1>
			
			<h3>d{diceValue}</h3>
			<input type="range" min="2" max="20"  onChange={changeDiceValue}></input>
	
			<button onClick={rollDice}>Roll the dice..</button>
			<h2>You Rolled: {rollValue}</h2> 
		</>
	)
}
