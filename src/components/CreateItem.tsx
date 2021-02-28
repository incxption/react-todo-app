import TableData from "./TableData"
import TableRow from "./TableRow"
import React, { useRef, useState } from "react"
import tw, { styled } from "twin.macro"
import ITodo from "../models/ITodo"
import IStatus from "../models/IStatus"
import IUser from "../models/IUser"
import Status from "./Status"
import UserProfile from "./UserProfile"

interface InputProps {
    bold?: boolean
}

const Input = styled.input<InputProps>`
    width: 100%;
    outline: none;
    transition-property: border-bottom-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    ${tw`border-b border-gray-300 focus:border-gray-400`}
    ${props => props.bold && tw`font-medium`}
`

const CreateButton = styled.div`
    ${tw`cursor-pointer transition-all`}
    ${tw`bg-purple-500 text-white px-2 py-1 rounded-md shadow-sm`}
    ${tw`flex items-center justify-center`}
    &:hover {
        ${tw`bg-purple-700 transform scale-105 shadow-md`}
    }
`

interface Props {
    addItem: (item: ITodo) => void
    nextId: number
    allUsers: IUser[]
}

export default function CreateItem({ addItem, nextId, allUsers }: Props) {
    const [project, setProject] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(IStatus.OPEN)
    const [users, setUsers] = useState<IUser[]>([])

    const projectRef = useRef<HTMLInputElement>(null)

    function createItem(flushInput: boolean) {
        if (project.length === 0 || message.length === 0)
            return

        if (flushInput) {
            setProject("")
            setMessage("")
            setStatus(IStatus.OPEN)
            setUsers([])
            projectRef.current?.focus()
        } else {
            setUsers([...users])
        }

        addItem({
            id: nextId, project, title: message, users, status
        })
    }

    function handlePress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            createItem(!event.shiftKey)
        }
    }

    return (
        <TableRow ignoreHoverBackground={true}>
            <TableData noWrap={true}>
                <div className="flex items-center">
                    <Input
                        type="text"
                        ref={projectRef}
                        bold={true}
                        onKeyPress={handlePress}
                        onChange={e => setProject(e.target.value)}
                        value={project}
                    />
                </div>
            </TableData>
            <TableData>
                <div className="flex items-center">
                    <Input
                        type="text"
                        onKeyPress={handlePress}
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
            </TableData>
            <TableData textCenter={true}>
                <div className="flex items-center justify-center">
                    {allUsers.map((user, index) => {
                        const isDisabled = !users.find(it => it.id === user.id)
                        const setDisabled = (disabled: boolean) => {
                            setUsers(prevState => {
                                const newState = [...prevState]
                                if (disabled) {
                                    newState.splice(newState.indexOf(user), 1)
                                } else {
                                    newState.push(user)
                                }
                                return newState
                            })
                        }
                        return <UserProfile key={user.id} isFirst={index === 0} isDisabled={isDisabled} setDisabled={setDisabled} user={user}/>
                    })}
                </div>
            </TableData>
            <TableData textCenter={true}>
                <Status status={status} setStatus={setStatus}/>
            </TableData>
            <TableData textCenter={true}>
                <div className="flex item-center justify-center">
                    <CreateButton onClick={() => createItem(true)}>
                        <span>Create</span>
                    </CreateButton>
                </div>
            </TableData>
        </TableRow>
    )
}

CreateItem.displayName = "Hahaha"