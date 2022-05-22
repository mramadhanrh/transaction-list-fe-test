import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > div:first-child {
    flex: 1;
    & > input {
      border-radius: 4px 0 0 4px;
      border-right: none;
    }
  }

  & > div:last-child {
    flex: 0.4;
    & > button {
      border-radius: 0 4px 4px 0;
    }
  }
`;
