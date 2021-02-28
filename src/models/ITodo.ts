import Member from "./IUser.js";
import Status from "./Status.js";

export default interface ITodo {
    id: number
    project: string
    message: string
    users: Member[]
    status: Status
}