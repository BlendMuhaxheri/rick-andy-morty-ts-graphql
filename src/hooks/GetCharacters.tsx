import { useQuery, gql } from '@apollo/client';
const GET_CHARACTERS = gql`
{
    characters{
        results{
            name
            image
            id
        }
    }
}
`

export const useCharacters: any = () => {
    const { data, error, loading } = useQuery(GET_CHARACTERS);
    return {
        error,
        loading,
        data
    }

}