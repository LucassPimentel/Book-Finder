import styledComponents from "styled-components";

const ButtonStyle = styledComponents.button`
height: 5vh;
width: 15vh;

`;

const Button = ({ name, onClick }) => {
  return <ButtonStyle onClick={onClick}>{name}</ButtonStyle>;
};

export default Button;
