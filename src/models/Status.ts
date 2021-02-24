enum Status {
    OPEN,
    IN_PROGRESS,
    COMPLETED
}

export interface StatusData {
    displayText: string
    color: string
}

export function getData(status: Status): StatusData {
    switch (status) {
        case Status.COMPLETED:
            return { displayText: "Completed", color: "green" }
        case Status.IN_PROGRESS:
            return { displayText: "In Progress", color: "blue" }
        case Status.OPEN:
            return { displayText: "Open", color: "red" }
    }
}

export default Status