import  * as C from "./style"
import Rosa1 from "../../assets/rosaHeader.png";
import Rosa2 from "../../assets/rosaHeader2.png";
const Header = () => {
    return (
        <C.Header>
        <div>
          <C.Imagem1 src={Rosa1} alt="" />
        </div>
        <div>
          <C.Title>Ana & Gabriel</C.Title>
        </div>
  
        <div>
          <C.Imagem2 src={Rosa2} alt="" />
        </div>
      </C.Header>
    )
}

export { Header }