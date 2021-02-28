import { gql } from "@apollo/client"

const UsersQuery = gql`
    query GetUsers {
        users {
            id
            name
            icon
        }
    }
`

export default UsersQuery