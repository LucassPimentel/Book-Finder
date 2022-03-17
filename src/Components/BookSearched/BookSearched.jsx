import React from "react";
import styledComponents from "styled-components";

const BookSearchedContainer = styledComponents.div`
background-color: #dcdcdc;
width: 40vw;
margin: 10px;
padding: 1em;
display: flex;
flex-direction: column;
border: 2px solid black;
gap: 1em;
text-align: justify;
box-shadow: 1px 1px 8px black;
`;

const BookSearched = ({ title, authors, description, link }) => {
  return (
    <BookSearchedContainer>
      <span>
        <h3>Título:</h3> {title}
      </span>
      <span>
        <h3>Autor(es): </h3>
        {authors}
      </span>
      <span>
        <h3>Descrição:</h3> {description}
      </span>
      <span>
        <a target="blank" href={link}>
          Saiba Mais
        </a>
      </span>
    </BookSearchedContainer>
  );
};

export default BookSearched;
