import * as C from "./style";
import Panela from "../../assets/panela.png";

const Description = () => {
  return (
    <C.Container>
      <C.ContentTitle>
        <h3>
          Chá de Panela <img src={Panela} alt="Panela" />
        </h3>
      </C.ContentTitle>

      <C.ContentMessage>
        <p>
          Amigos especiais são aqueles que fazem parte de todos os momentos de
          nossas vidas, por isso, lhe convido para fazer parte de mais esse
          momento de alegria, no nosso Chá de Panela, onde estamos a um passo do
          nosso <span>SIM</span>.
        </p>
      </C.ContentMessage>
      <C.ContentSaveData>
        <p>#Save The Date</p>
      </C.ContentSaveData>
    </C.Container>
  );
};

export { Description };
