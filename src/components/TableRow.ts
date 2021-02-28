import tw from "twin.macro"
import styled, { css } from "styled-components"

interface Props {
    ignoreHoverBackground?: boolean
}

const TableRow = styled.tr<Props>`
    ${tw`border-b border-gray-200`}

    &:nth-child(2n), &:nth-child(2n) input {
        ${tw`bg-gray-50`}
    }

    ${props => !props.ignoreHoverBackground && css`
        &:hover, &:hover input {
            ${tw`bg-gray-100`}
        }
    `}
`

export default TableRow