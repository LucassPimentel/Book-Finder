import styledComponents from "styled-components";

const InputStyle = styledComponents.input`
height: 5vh;
width: 25vw;
padding: 5px;
`;

const Input = ({ onChange, type, name, id, placeholder }) => {
  return (
    <InputStyle
      type={type}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
