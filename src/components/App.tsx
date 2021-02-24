import Item from "../models/Item";
import Status from "../models/Status";
import User from "../models/User";
import ItemComponent from "./ItemComponent";

const me: User = {
    id: 0,
    name: "incxption",
    icon: "https://avatars.githubusercontent.com/u/58042339?s=460&u=0f2edf4d4e13bcf90b671c84fc2d89e6071f0d9a&v=4"
}

const juli: User = {
    id: 0,
    name: "flaaps",
    icon: "https://avatars.githubusercontent.com/u/58341821?s=460&u=e97ba5f26844bc6de457a0a79f049951f80b1211&v=4"
}

const items: Item[] = [
    { id: 0, project: "Developing", message: "Learn React.js", status: Status.IN_PROGRESS, users: [me] },
    { id: 1, project: "Developing", message: "Learn HTML/CSS/JS", status: Status.COMPLETED, users: [me] },
    { id: 2, project: "Projects", message: "Finish BetBetter", status: Status.OPEN, users: [me, juli] },
    { id: 3, project: "School", message: "Deutsch Arbeitsauftrag Fabel", status: Status.OPEN, users: [me] },
    { id: 4, project: "School", message: "Physik Flughöhe geostationärer Satelliten", status: Status.COMPLETED, users: [me, juli] },
]

export default function App() {
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
                    {items.map(item => (<ItemComponent item={item}/>))}
                </tbody>
            </table>
        </div>
    )
}