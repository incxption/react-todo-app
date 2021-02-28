import tw, { styled } from "twin.macro"

interface Props {
    textCenter?: boolean
    noWrap?: boolean
}

const TableData = styled.td<Props>(props => [
    tw`px-6 py-3`,
    props.textCenter && tw`text-center`,
    props.noWrap && tw`whitespace-nowrap`
])

export default TableData