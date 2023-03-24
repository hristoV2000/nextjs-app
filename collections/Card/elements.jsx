// Styled elements for the Card go here
import styled from "styled-components";

// cards style

export const Card = styled.div`
  margin-bottom: 30px;
  background-color: #F6F6F6;
  border-style: ${({selected}) => selected ? 'solid' : 'none'};
  border-color: ${({selected}) => selected ? '#20B9FE' : 'none'};
  border-radius: 10px;
  height: 100%;
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
    padding: 30px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
        margin-left: 25px;
    }
`;
