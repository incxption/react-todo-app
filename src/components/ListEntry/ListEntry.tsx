import React from "react";
import TodoItem from "../../models/TodoItem.js";

interface ListEntryProps {
    item: TodoItem
    updateItem: (item: TodoItem, done: boolean) => void
    deleteItem: (item: TodoItem) => void
}

function ListEntry({ item, updateItem, deleteItem }: ListEntryProps) {
    const className = item.done ? "done" : ""

    return (
        <li>
            <div>
                <p className={className}>{item.text}</p>
                <input type="checkbox" checked={item.done} onChange={e => updateItem(item, e.target.checked)}/>
                <button onClick={() => deleteItem(item)}>Delete</button>
            </div>
        </li>
    )
}

export default ListEntry