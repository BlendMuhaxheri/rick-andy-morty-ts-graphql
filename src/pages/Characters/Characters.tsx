import React from 'react';
import './Characters.css'
import CardList from '../../components/Cards/CardList'
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import { useCharacters } from '../../hooks/GetCharacters';
import Box from '@mui/material/Box';
interface Props {
    name: string,
    image: string,
    id: string

}
export const Characters: React.FC<Props> = ({ name }) => {
    const { error, loading, data } = useCharacters()
    console.log({ error, loading, data });

    if (loading)
        return <div className='spinner_cnt'><Box color="secondary" sx={{ display: 'flex' }}><CircularProgress /></Box></div>

    if (error)
        return <div><h1>something went wrong ... </h1></div>

    return <div className='characters-list'>
        {data.characters.results.map((character: any) => <CardList name={character.name} image={character.image} id={character.id} />)}
    </div>;
};
