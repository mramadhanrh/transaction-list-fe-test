import { FC, InputHTMLAttributes } from 'react';
import { Container, Input, SearchIcon } from './style';

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <Container>
      <Input {...props} />
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
