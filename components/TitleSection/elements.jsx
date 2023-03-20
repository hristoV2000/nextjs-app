import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  width: 100%;
  margin-top: ${({isMainTitle})=> isMainTitle ? '8rem': '0rem'};
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: ${({isMainTitle})=> isMainTitle ? 'center': 'left'};
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  color: ${({selected})=> selected ? '#20B9FE' : 'black'};
  text-decoration: ${({selected}) => selected ? 'underline' : 'none'};
  font-family: Poppins;
`;
export const StyledSubTitle = styled.p`
  color: black;
  font-family: Poppins;
  padding-right: 10px;
  margin-top: -1rem;
`;
