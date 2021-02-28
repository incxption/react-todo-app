import IUser from "../models/IUser"
import tw, { styled, css } from "twin.macro"

interface Props {
    isFirst: boolean
    isDisabled: boolean
    setDisabled: (newState: boolean) => void
    user: IUser
}

const RoundedImage = styled.img<{ isDisabled: boolean }>`
    ${tw`w-8 h-8 rounded-full border-gray-200 border transition-all`}
    ${props => props.isDisabled && css`
        filter: brightness(50%) grayscale(100%);
        //transform: scale(0.7);
        ${tw`w-6 h-6`}
        &:hover {
            filter: brightness(90%) grayscale(10%);
            cursor: pointer;
        }
    `}
    ${props => !props.isDisabled && css`
        ${tw`shadow-md`}
        &:hover {
            transform: scale(1.15);
            cursor: pointer;
        }
    `}
`

const StyledContainer = styled.div<{ isFirst: boolean }>`
    ${tw`w-8 h-8 inline-block relative flex items-center justify-center`}
    ${props => !props.isFirst && tw`-ml-2`}
`

export default function UserProfile({ isFirst, isDisabled, setDisabled, user: { icon, name } }: Props) {
    return (
        <StyledContainer isFirst={isFirst}>
            <RoundedImage isDisabled={isDisabled} onClick={() => setDisabled(!isDisabled)} src={icon} alt={name} title={name}/>
        </StyledContainer>
    )
}