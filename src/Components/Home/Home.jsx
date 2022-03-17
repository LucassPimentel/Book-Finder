import axios from "axios";
import { React, useState } from "react";
import BookSearched from "../BookSearched/BookSearched";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  ContainerSearch,
  ContainerSearched,
  HomeStyle,
  Title,
} from "./Home.Style";

const Home = () => {
  const [bookSearch, setbookSearch] = useState([]);
  const [bookSearched, setBookSearched] = useState([]);

  const handleChange = (e) => {
    setbookSearch(e.target.value);
  };

  const ClickSearch = () => {
    if (bookSearch.length <= 0) {
      alert("Pesquise algo...");
    } else {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
        .then((resp) => setBookSearched(resp.data.items));
    }
  };

  return (
    <>
      <HomeStyle>
        <ContainerSearch>
          <Title>Book Finder</Title>
          <Input
            type="text"
            name="bookSearch"
            id="bookSearch"
            onChange={handleChange}
            placeholder="Busque pelo nome do livro, autor, categoria..."
          />
          <Button name="Buscar" onClick={ClickSearch} />
        </ContainerSearch>
      </HomeStyle>
      {bookSearched.length > 0 && (
        <ContainerSearched>
          {bookSearched.map((book) => {
            return (
              <BookSearched
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={
                  book.volumeInfo.description ? (
                    book.volumeInfo.description
                  ) : (
                    <p>Sem descrição</p>
                  )
                }
                link={book.volumeInfo.infoLink}
              />
            );
          })}
        </ContainerSearched>
      )}
    </>
  );
};

export default Home;
