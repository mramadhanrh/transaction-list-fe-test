import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 43px;
`;

export const Input = styled.input`
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  padding: 12px 12px 12px 50px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.platinum};
  }
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({
  icon: faMagnifyingGlass,
})`
  position: absolute;
  top: 50%;
  left: 14px;
  color: ${({ theme }) => theme.color.lightgray};
  transform: translate(0, -50%);
`;
