import React from 'react';
import * as S from './styles';

const MovieCard = ({ movieData, }) => {
  console.log(movieData);
  return (
    <S.Container>
      <S.Image src={movieData.img} alt={movieData.title} />
      <S.Title>{movieData.title}</S.Title>
      <S.Text>{movieData.desc}</S.Text>
      <S.Cast>
      {
        movieData?.cast?.map((cast, index) => {
          return (
            <S.CastContainer key={index}>
              <S.CastImage src={cast.img} />
              <S.CastName>{cast.name}</S.CastName>
            </S.CastContainer>
          );
        })
      }
      </S.Cast>
    </S.Container>
  )
}

export default MovieCard;
