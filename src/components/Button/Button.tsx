import styled from 'styled-components';
interface Props {
  text: string;
}


const Button = (props: Props) => {
  const Styled = styled.button`
    background-color: #3c9ffa;
    border: none;
    width: 20rem;
    height: 50px;
    border-radius: 70rem;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Josefin Sans', cursive;
    transition: 0.7s ease-in-out;
    margin: 1rem;
    &:hover{
      background-color: #1B8CF6;
    }
  `
  const Container = styled.div`
    text-align: center;
  `

  return (
    <Container>
      <Styled>{props.text}</Styled>
    </Container>
  )
}



export { Button };