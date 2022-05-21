import styled from 'styled-components';

export const Container = styled.div``;

export const HeadWrapper = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  color: #333333;
  font-size: 42px;
`;

export const Greeting = styled.h2`
  font-weight: 900;
  color: #333333;
  margin: 0 0 8px;
`;

export const Description = styled.p`
  margin: 0;
  color: #333333;
  & > span {
    font-weight: 900;
    color: ${({ theme }) => theme.color.orange};
  }
`;
