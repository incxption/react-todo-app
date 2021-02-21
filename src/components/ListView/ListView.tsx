import React from "react"
import TodoItem from "../../models/TodoItem.js";
import "./ListView.css"
import ListEntry from "../ListEntry/ListEntry";

interface ListViewProps {
    items: TodoItem[]
    updateItem: (item: TodoItem, done: boolean) => void
    deleteItem: (item: TodoItem) => void
}

function ListView({ items, updateItem, deleteItem }: ListViewProps) {
    return (
        <ul>
            {items.map(item => (
                <ListEntry key={item.id}
                           item={item}
                           updateItem={updateItem}
                           deleteItem={deleteItem}/>)
            )}
        </ul>
    )
}

export default ListView