import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;

  & > svg {
    font-size: 40px;
    color: ${({ theme }) => theme.color.orange};
    margin-right: 24px;
  }
`;

export const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  color: #333333;

  & p,
  b {
    margin: 0;
    line-height: 24px;
  }

  & > div {
    margin-bottom: 12px;
  }
`;
