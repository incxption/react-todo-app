import Member from "./User.js";
import Status from "./Status.js";

export default interface Item {
    id: number
    project: string
    message: string
    users: Member[]
    status: Status
}