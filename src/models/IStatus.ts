enum IStatus {
    OPEN,
    IN_PROGRESS,
    COMPLETED
}

export function next(status: IStatus): IStatus {
    return (status.valueOf() + 1) % 3
}

export interface StatusData {
    svg: string
    displayText: string
    color: string
}

export function getData(status: IStatus): StatusData {
    switch (status) {
        case IStatus.COMPLETED:
            return { displayText: "Completed", color: "green", svg: "rgba(52, 211, 153)" }
        case IStatus.IN_PROGRESS:
            return { displayText: "In Progress", color: "blue", svg: "rgba(96, 165, 250)" }
        case IStatus.OPEN:
            return { displayText: "Open", color: "red", svg: "rgb(248, 113, 113)" }
    }
}

export default IStatus