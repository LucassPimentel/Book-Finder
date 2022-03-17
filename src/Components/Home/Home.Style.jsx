import styledComponents from "styled-components";

export const HomeStyle = styledComponents.div`
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;
export const ContainerSearch = styledComponents.div`
    background-color: #dcdcdc;
    box-shadow: 1px 1px 8px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 30vw;
    gap: 1em;
    margin: 1em;
    `;
export const ContainerSearched = styledComponents.div`
// background-color: green;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`;
export const Title = styledComponents.h1`
font-size: 2em;
`;
