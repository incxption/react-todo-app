import { gql } from "@apollo/client"

const ItemsQuery = gql`
    query GetItems {
        items {
            id
            project
            title
            status
            users {
                id
                name
                icon
            }
        }
    }
`

export default ItemsQuery