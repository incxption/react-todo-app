import Member from "./IUser.js";
import IStatus from "./IStatus.js";

export default interface ITodo {
    id: number
    project: string
    message: string
    users: Member[]
    status: IStatus
}