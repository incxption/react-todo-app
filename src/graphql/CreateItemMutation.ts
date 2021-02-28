import { gql } from "@apollo/client"

const CreateItemMutation = gql`
    mutation CreateItem($newItem: TodoInput!) {
        create(newItem: $newItem) {
            id
        }
    }
`

export default CreateItemMutation