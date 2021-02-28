import ITodo from "../models/ITodo"
import IStatus from "../models/IStatus"
import IUser from "../models/IUser"
import TodoItem from "./TodoItem"
import CreateItem from "./CreateItem"
import { useState } from "react"

const allUsers = [
    {
        id: 0,
        name: "incxption",
        icon: "https://avatars.githubusercontent.com/u/58042339?s=460&u=0f2edf4d4e13bcf90b671c84fc2d89e6071f0d9a&v=4"
    }, {
        id: 1,
        name: "flaaaps",
        icon: "https://avatars.githubusercontent.com/u/58341821?s=460&u=e97ba5f26844bc6de457a0a79f049951f80b1211&v=4"
    }, {
        id: 2,
        name: "verityyt",
        icon: "https://avatars.githubusercontent.com/u/58147038?s=460&u=e091c17da1e53ada760db5296f4a4b73799bf9c0&v=4"
    }
]

const initialItems: ITodo[] = [
    { id: 0, project: "Developing", message: "Learn React.js", status: IStatus.IN_PROGRESS, users: [] },
    /*{ id: 1, project: "Developing", message: "Learn HTML/CSS/JS", status: IStatus.COMPLETED, users: [] },
    { id: 2, project: "Projects", message: "Finish BetBetter", status: IStatus.OPEN, users: [] },
    { id: 3, project: "School", message: "Deutsch Arbeitsauftrag Fabel", status: IStatus.OPEN, users: [] },
    { id: 4, project: "School", message: "Physik Flughöhe geostationärer Satelliten", status: IStatus.COMPLETED, users: [] },*/
]

export default function App() {
    const [items, setItems] = useState(initialItems)
    const nextId = items.length

    function addItem(item: ITodo) {
        setItems(prev => [...prev, item])
    }

    function setStatus(item: ITodo, next: IStatus) {
        setItems(prev => {
            const newState = [...prev]
            newState.find(it => it.id === item.id)!!.status = next
            return newState
        })
    }

    function modifyUsers(item: ITodo, user: IUser, enabled: boolean) {
        setItems(prev => {
            const newState = [...prev]
            const users = newState.find(it => it.id === item.id)!!.users
            if (enabled) {
                users.push(user)
            } else {
                users.splice(users.indexOf(user), 1)
            }
            return newState
        })
    }

    return (
        <div className="w-4/5 lg:w-3/5 bg-white shadow-md rounded-sm my-6">
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal font-extrabold">
                        <th className="py-3 px-6 text-left">Project</th>
                        <th className="py-3 px-6 text-left">Message</th>
                        <th className="py-3 px-6 text-center">Members</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-normal">
                    {items.map(item => (
                        <TodoItem key={item.id} allUsers={allUsers} modifyUsers={modifyUsers} setStatus={setStatus} item={item}/>)
                    )}
                    <CreateItem allUsers={allUsers} addItem={addItem} nextId={nextId}/>
                </tbody>
            </table>
        </div>
    )
}