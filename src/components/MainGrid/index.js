import styled from "styled-components";

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-inline: auto;
  max-width: 500px;
  padding: 16px;

  .profileArea {
    grid-area: "profileArea";
    display: none;

    img {
      border-radius: 8px;
    }

    @media (min-width: 860px) {
      display: block;
    }
  }

  .welcomeArea {
    grid-area: "welcomeArea";
  }

  .profileRelationsArea {
    grid-area: "profileRelationsArea";
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-area: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;
