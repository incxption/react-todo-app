import React, { FormEvent, useRef, useState } from 'react';
import ListView from "../ListView/ListView";
import TodoItem from "../../models/TodoItem.js";

const initialItems: TodoItem[] = [
    { id: 0, text: "Learn React", done: false },
    { id: 1, text: "Fuck React", done: false },
    { id: 2, text: "Dump React", done: false },
    { id: 3, text: "Love React", done: false },
]

function App() {
    const currentId = useRef(10)
    const [items, setItems] = useState(initialItems)

    function updateItem(item: TodoItem, done: boolean) {
        if (item.done !== done) {
            setItems(prevState => {
                const newState = [...prevState]
                newState.forEach(newItem => {
                    if (newItem.id === item.id) {
                        newItem.done = done
                    }
                })
                return newState
            })
        }
    }

    function deleteItem(item: TodoItem) {
        setItems(prevState => {
            const newState = [...prevState]
            newState.splice(newState.indexOf(item), 1);
            return newState
        })
    }

    function calculateNewId() {
        currentId.current++
        return currentId.current
    }

    const [input, setInput] = useState("")

    function addItemFromState() {
        if (input && input.length > 0) {
            setItems(prevState => [...prevState, {
                id: calculateNewId(), text: input, done: false
            }])
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        addItemFromState()
        setInput("")
    }

    return (
        <div id="app">
            <ListView items={items} updateItem={updateItem} deleteItem={deleteItem}/>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            </form>
        </div>
    );
}

export default App;
