import Item from "../models/Item";
import UserComponent from "./UserComponent";
import TableData from "./TableData"
import TableRow from "./TableRow"
import { getData } from "../models/Status";

interface Props {
    item: Item
}

export default function ItemComponent(
    { item: { project, message, users, status } }: Props
) {
    const statusData = getData(status)

    return (
        <TableRow>
            <TableData noWrap={true}>
                <div className="flex items-center">
                    <span className="font-medium">{project}</span>
                </div>
            </TableData>
            <TableData>
                <div className="flex items-center">
                    <span>{message}</span>
                </div>
            </TableData>
            <TableData textCenter={true}>
                <div className="flex items-center justify-center">
                    {users.map((value, index) => (
                        <UserComponent user={value} isLast={index === users.length - 1}/>
                    ))}
                </div>
            </TableData>
            <TableData textCenter={true}>
                <span className={`bg-${statusData.color}-200 text-${statusData.color}-600 py-1 px-3 rounded-full text-xs`}>
                    {statusData.displayText}
                </span>
            </TableData>
            <TableData textCenter={true}>
                <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                        </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </div>
                </div>
            </TableData>
        </TableRow>
    )
}