import React from 'react';
import './CharacterDetail.css'
import { useQuery, gql } from '@apollo/client';
import { useCharacter } from '../../hooks/GetCharacter';
import { useParams } from 'react-router';
interface Props {
    id: string
}
const CharacterDetail: React.FC<Props> = () => {
    const { id } = useParams<Props>();
    const { loading, error, data } = useCharacter(id);
    console.log({ loading, data, error });
    if (loading)
        return <div>spinner</div>
    if (error)
        return <div>something went wrong</div>
    return <div className='character'>
        <img src={data.character.image} width={750} height={750} />
        <div className='character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
        </div>
        <div className='character-episode'> {data.character.episode.map((episode: any) => {
            return <div>
                {episode.name} - <b>{episode.episode}</b>

            </div>
        })}</div></div>;
};

export default CharacterDetail;
