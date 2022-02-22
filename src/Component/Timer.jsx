import React, { useEffect, useState } from 'react';

export default function Timer({tenzies, second, setSecond}) {
    
    useEffect(() => {
        let addSecond = setInterval(() => {
            if(!tenzies) {setSecond(oldSecond => oldSecond + 1)}
        }, 1000)
        return () => {clearInterval(addSecond)}
    }, [tenzies])

    return (
            <h3>Time passed: {second}s</h3>       
    )
}