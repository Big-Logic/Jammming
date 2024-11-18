import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Icons
import { HiHome, HiMagnifyingGlass } from "react-icons/hi2";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 0 0 0;
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 5rem;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const Button = styled.button`
  height: 5rem;
  border-radius: 50%;
  background-color: #1ed760;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0 2rem;
  &:focus {
    outline: 0;
    border: none;
  }
`;

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue);
    // setInputValue("");
    // setSearchResults([
    //   { id: "128rd", name: "IDK", artist: "Logic", album: "Global boy" },
    //   { id: "188rd", name: "Unavailable", artist: "Davido", album: "Timeless" },
    // ]);
  }
  return (
    <section>
      <Container>
        <Button onClick={() => navigate("/")}>
          <HiHome />
        </Button>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="What do you want to find?"
          />

          <Button type="submit">
            <HiMagnifyingGlass />
          </Button>
        </Form>
      </Container>
    </section>
  );
}
export default SearchBar;
