import tw from "twin.macro"
import styled from "styled-components"

const TableRow = styled.tr`
    ${tw`border-b border-gray-200 even:bg-gray-50`}
    
    &:hover {
        ${tw`bg-gray-100`}
    }
`

export default TableRow