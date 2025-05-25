/** Import necessary libraries */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

/** Constants */
const SLUG_WORKS = ["car", "dog", "computer", "person", "inside", "word", "for", "please", "to", "cool", "open", "source"];
const SERVICE_URL = "http://localhost:3000";

/** Styled components */
/** Styled components */
const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d1117;
  min-height: 100vh;
  font-family: 'Fira Code', monospace;
`;

const Title = styled.h1`
  color: #58a6ff;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  background-color: #161b22;
  color: #c9d1d9;
  border: 1px solid #30363d;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  &:focus {
    outline: none;
    border-color: #58a6ff;
  }
`;

const StyledSelect = styled.select`
  margin: 10px 0;
  padding: 10px;
  width: 320px;
  background-color: #161b22;
  color: #c9d1d9;
  border: 1px solid #30363d;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  &:focus {
    outline: none;
    border-color: #58a6ff;
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 24px;
  background-color: #238636;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2ea043;
  }

  &:disabled {
    background-color: #30363d;
    cursor: not-allowed;
  }
`;


/** Helper function */
function getRandomSlug() {
    let slug = "";
    for (let i = 0; i < 3; i++) {
        slug += SLUG_WORKS[Math.floor(Math.random() * SLUG_WORKS.length)];
    }
    return slug;
}

/** Component */
export const Landing = () => {
    const [language, setLanguage] = useState("node-js");
    const [replId, setReplId] = useState(getRandomSlug());
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
      <Container>
        <Title>Lepl lit</Title>
        <StyledInput
          onChange={(e) => setReplId(e.target.value)}
          type="text"
          placeholder="Repl ID"
          value={replId}
        />
        <StyledSelect
          name="language"
          id="language"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="node-js">Node.js</option>
          <option value="python">Python</option>
          <option value="react-ts">React Typescript</option>
          <option value="c++">C++</option>
          <option value="next-js">Next.js</option>

        </StyledSelect>
        <StyledButton disabled={loading} onClick={async () => {
          setLoading(true);
          await axios.post(`${SERVICE_URL}/project`, { replId, language });
          setLoading(false);
          navigate(`/coding/?replId=${replId}`)
        }}>{loading ? "Starting ..." : "Start Coding"}</StyledButton>
      </Container>
    );
}