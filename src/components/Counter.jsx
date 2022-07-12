import React from 'react'

export const Counter = props => {
    const {value, name, id} = props

    const emptySlot = <div>empty</div>,
        formatValue = () => !value ? emptySlot : value,
        getBadgeClasses = () => {
            let classes = 'badge m-2 p-2 '
            return classes += !value ? 'bg-warning' : 'bg-primary'
        }

    return (
        <div>
            <span>{name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className={'btn btn-primary btn-sm m-2'} onClick={() => props.onIncrement(id)}>+</button>
            <button className={'btn btn-danger btn-sm m-2'} onClick={() => props.onDecrement(id)}>-</button>
            <button className={'btn btn-dark btn-sm m-2'} onClick={() => props.onDelete(id)}>Delete</button>
        </div>
    )
}