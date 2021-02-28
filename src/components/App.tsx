import ITodo from "../models/ITodo"
import IStatus from "../models/IStatus"
import IUser from "../models/IUser"
import TodoItem from "./TodoItem"
import CreateItem from "./CreateItem"
import { useMutation, useQuery } from "@apollo/client"
import UsersQuery from "../graphql/UsersQuery"
import ItemsQuery from "../graphql/ItemsQuery"
import UpdateStatusMutation from "../graphql/UpdateStatusMutation"
import UpdateUsersMutation from "../graphql/UpdateUsersMutation"
import CreateItemMutation from "../graphql/CreateItemMutation"

export default function App() {
    const { loading: usersLoading, error: usersError, data: usersData } = useQuery(UsersQuery)
    const { loading: itemsLoading, error: itemsError, data: itemsData, refetch: refetchItems } = useQuery(ItemsQuery)

    const [updateStatus] = useMutation(UpdateStatusMutation)
    const [updateUsers] = useMutation(UpdateUsersMutation)
    const [createItem] = useMutation(CreateItemMutation)

    if (usersError || itemsError) {
        return (
            <div
                className="w-3/5 h-3/5 bg-red-200 shadow transition-all duration-200 rounded-md text-lg font-medium flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold text-red-700">{usersError ? "Error while loading users" : "Error while loading items"}</h1>
                <p className="text-red-600">{String(usersError ? usersError : itemsError).replace("Error: ", "")}</p>
            </div>
        )
    }

    if (usersLoading || itemsLoading) {
        return (
            <div
                className="w-3/5 h-3/5 bg-purple-200 shadow transition-all duration-200 rounded-md text-lg font-medium flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold text-purple-700">{usersLoading ? "Loading users..." : "Loading items..."}</h1>
            </div>
        )
    }

    const allUsers = usersData.users as IUser[]
    const items = itemsData.items as ITodo[]
    const nextId = items.length

    function addItem(item: ITodo) {
        createItem({
            variables: {
                newItem: {
                    project: item.project,
                    title: item.title,
                    users: item.users.map(it => it.id),
                    status: item.status.valueOf()
                }
            }
        })
            .then(() => refetchItems())
            .catch(error => console.error(error))
    }

    function setStatus(item: ITodo, next: IStatus) {
        updateStatus({ variables: { id: item.id, newStatus: next } })
            .then(() => refetchItems())
            .catch(error => console.error(error))
    }

    function modifyUsers(item: ITodo, user: IUser, enabled: boolean) {
        const newUsers = [...item.users]
        if (enabled) newUsers.push(user)
        else newUsers.splice(newUsers.indexOf(user), 1)

        const userIds = newUsers.map(it => String(it.id))
        updateUsers({ variables: { id: item.id, newUsers: userIds } })
            .then(() => refetchItems())
            .catch(error => console.error(error))
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