import { ChangeEventHandler, FC } from 'react';
import SearchInput from '../../molecules/SearchInput';
import SortDropdown from '../../molecules/SortDropdown';
import { Container } from './style';

interface SortSearchInputProps {
  value?: string;
  placeholder?: string;
  activeSort?: string;
  sortData?: string[];
  onSelect?(index: number): void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SortSearchInput: FC<SortSearchInputProps> = ({
  value = '',
  placeholder = '',
  activeSort = '',
  sortData = [],
  onSelect = () => {},
  onChange = () => {},
}) => {
  return (
    <Container>
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SortDropdown
        activeItem={activeSort}
        data={sortData}
        onSelect={onSelect}
      />
    </Container>
  );
};

export default SortSearchInput;
