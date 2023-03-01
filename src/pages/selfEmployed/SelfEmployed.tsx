import styled from "styled-components"
import { Button } from "../../components/Button/Button"
import logo from '../../assets/logo-vet.png'

const Image = styled.img`
  width: 10rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 15rem;
  bottom: 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: none;
  }
`

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  padding-top: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
`

const ChildrenDiv = styled.div`
  height: 5rem;  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Text = styled.h1`
  font-size: 2rem;
  font-family: 'Josefin Sans', cursive;
  color: #868686;
  margin: 0;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    position: relative;
    top: -1.5rem;
    left: 4rem;
  }
`
const SubText = styled.h3`
  font-size: 1.5rem;
  font-family: 'Josefin Sans', cursive;
  color: #868686;
  margin: 0;
  margin-top: -0.5rem;
  text-align: center;
  @media (max-width: 768px) {
    position: relative;
    top: -10rem;
    font-size: 4rem;
  }
`

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