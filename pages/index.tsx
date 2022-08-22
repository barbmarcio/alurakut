import { MainGrid } from "../src/components/MainGrid";
import { Box } from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/Commons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img src={`https://www.github.com/${githubUser}.png`}></img>
    </Box>
  );
}

export default function Home() {
  const githubUser = "barbmarcio";

  const pessoasFavoritas = ["diego3g", "rafaballerini"];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea">
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">Bem-vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img src={`https://github.com/${pessoa}.png`} />
                      <span>{pessoa}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
