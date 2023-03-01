import { Button } from "../../components/Button/Button"
import logo from '../../assets/logo-vet.png'
import { Image, MainDiv, ChildrenDiv, Text, SubText } from "./styles"
const SelfEmployed = () => {

  return (
    <>
    <Image src={logo}/>
      <MainDiv>
        <Button text="Estabelecimento" />
        <ChildrenDiv>
          <SubText>Você é</SubText>
          <Text>OU</Text>
        </ChildrenDiv>
        <Button text="Veterinário" />
      </MainDiv>
    </>

  )
}


export { SelfEmployed }