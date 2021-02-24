import User from "../models/User";

interface UserComponentProps {
    isFirst: boolean
    user: User
}

export default function UserComponent({ isFirst, user: { icon, name } }: UserComponentProps) {
    let className = "w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125 transition-all"
    if (!isFirst) {
        className += " -m-1"
    }

    return (
        <img className={className} src={icon} alt={name} title={name}/>
    )
}