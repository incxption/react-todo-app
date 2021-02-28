import { gql } from "@apollo/client"

const UpdateStatusMutation = gql`
    mutation UpdateStatus($id: ID!, $newStatus: Status!) {
        update(id: $id, update: {status: $newStatus}) {
            status
        }
    }
`

export default UpdateStatusMutation