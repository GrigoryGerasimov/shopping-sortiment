import React, {useState} from 'react'
import {Counter} from './Counter.jsx'

export const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: 300},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'}
    ],
        [counters, setCounters] = useState(initialState),

        handleDelete = id => setCounters(prevState => prevState.filter(counter => counter.id !== id)),
        handleReset = () => setCounters(initialState),
        handleIncrement = id => setCounters(prevState => prevState.map(state => state.id === id ? {...state, value: state.value + 1} : state)),
        handleDecrement = id => setCounters(prevState => prevState.map(state => state.id === id ? {...state, value: state.value - 1} : state))

    return (
        <>
            {counters.map(counter => <Counter key={counter.id} {...counter} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement}/>)}
            <button className={'btn btn-primary btn-sm m-2'} onClick={handleReset}>Reset</button>
        </>
    )
}