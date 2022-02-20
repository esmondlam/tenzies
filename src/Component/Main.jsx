import Die from './Die'
import React, { useState } from 'react'

export default function Main() {
    
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    const diceElms = dice.map(dice => <Die value={dice} />)

    return (
        <main >
            <div className='container-die'>
                {diceElms}
            </div>
        </main>
    )
}