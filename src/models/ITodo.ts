import IUser from "./IUser.js";
import IStatus from "./IStatus.js";

export default interface ITodo {
    id: number
    project: string
    title: string
    users: IUser[]
    status: IStatus
}