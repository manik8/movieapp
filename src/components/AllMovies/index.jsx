import React, { useState, } from 'react';
import * as S from './styles';

import MovieCard from '../movieCard';
import { data, } from './data';

const AllMovies = () => {

  const [state, setState, ] = useState(data);
  const [count, setCount, ] = useState(6);

  const handleClick = () => {
    setCount(count + 3);
  };
  
  return (
    <S.Container>
      <S.SubContainer>
    {
      state.slice(0, count).map((d, index) => {
        return <MovieCard movieData={d} key={index} />
      })
    }
    </S.SubContainer>
    {
      state.length > count ? (
        <S.Button onClick={handleClick}>View more</S.Button>
      ) : null
    }
    </S.Container>
  )
}

export default AllMovies