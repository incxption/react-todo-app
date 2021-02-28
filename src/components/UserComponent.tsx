import User from "../models/User"
import tw, { styled } from "twin.macro"

interface UserComponentProps {
    isLast: boolean
    user: User
}

const RoundedImage = styled.img`
    ${tw`w-6 h-6 rounded-full border-gray-200 border transition-all`}
    &:hover {
        transform: scale(1.15);
        ${tw`shadow-md`}
    }
`

const StyledContainer = styled.div<{ isLast: boolean }>`
    ${tw`w-6 h-6 inline-block`}
    ${props => !props.isLast && tw`-m-1`}
`

export default function UserComponent({ isLast, user: { icon, name } }: UserComponentProps) {
    return (
        <StyledContainer isLast={isLast}>
            <RoundedImage src={icon} alt={name} title={name}/>
        </StyledContainer>
    )
}