import Die from './Die'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Main() {

    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
        setDice(prevDice => prevDice.map(die => (
            die.isHeld === true
            ? die
            : {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        )))
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => (
            die.id === id 
            ? {...die, isHeld: !die.isHeld}
            : die
        )))
    }

    const diceElms = dice.map(dice => <Die 
        key={dice.id}
        value={dice.value} 
        isHeld={dice.isHeld}
        holdDice={()=>holdDice(dice.id)}
        />)

    return (
        <main >
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            <br/>Click each die to freeze it at its current value between rolls.</p>
            <div className='container-die'>
                {diceElms}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}