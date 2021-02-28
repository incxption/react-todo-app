enum IStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}

export function next(status: IStatus): IStatus {
    switch (status) {
        case IStatus.OPEN:
            return IStatus.IN_PROGRESS
        case IStatus.IN_PROGRESS:
            return IStatus.COMPLETED
        case IStatus.COMPLETED:
            return IStatus.OPEN
    }
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