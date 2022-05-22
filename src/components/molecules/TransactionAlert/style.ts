import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px 24px;
  box-sizing: border-box;
  border-radius: 6px;
  font-weight: bold;
`;

export const TransactionLabel = styled.p`
  margin: 0;
  color: #333333;
`;
