import styled from "styled-components";

export const Service = styled.div`
  margin-top: 30px;
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

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
