import IStatus, { getData, next } from "../models/IStatus"

interface StatusProps {
    status: IStatus
    setStatus: (next: IStatus) => void
}

export default function Status({ status, setStatus }: StatusProps) {
    const data = getData(status)

    function switchToNextStatus() {
        setStatus(next(status))
    }

    return (
        <>
            <span className={`bg-${(data.color)}-200 text-${(data.color)}-600 py-1 px-3 rounded-l-full text-xs shadow-md w-24 inline-block transition-all duration-500`}>
                {data.displayText}
            </span>
            <span className={`bg-gray-50 py-1 px-2 rounded-r-full text-xs shadow-md cursor-pointer transition-all duration-500`} onClick={switchToNextStatus}>
                <svg style={{ display: "inline" }} width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Rounded" transform="translate(-619.000000, -2862.000000)">
                            <g id="Image" transform="translate(100.000000, 2626.000000)">
                                <g id="-Round-/-Image-/-navigate_next" transform="translate(510.000000, 230.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"/>
                                        <path
                                            d="M9.31,6.71 C8.92,7.1 8.92,7.73 9.31,8.12 L13.19,12 L9.31,15.88 C8.92,16.27 8.92,16.9 9.31,17.29
                                            C9.7,17.68 10.33,17.68 10.72,17.29 L15.31,12.7 C15.7,12.31 15.7,11.68 15.31,11.29 L10.72,6.7 C10.34,6.32
                                            9.7,6.32 9.31,6.71 Z"
                                            id="🔹-Icon-Color" fill={data.svg}/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
        </>
    )
}
