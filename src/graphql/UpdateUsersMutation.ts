import { gql } from "@apollo/client"

const UpdateUsersMutation = gql`
    mutation UpdateUsers($id: ID!, $newUsers: [ID!]!) {
        update(id: $id, update: {users: $newUsers}) {
            users {
                id
            }
        }
    }
`

export default UpdateUsersMutation