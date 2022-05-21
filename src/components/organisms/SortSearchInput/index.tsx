import { FC } from 'react';
import SearchInput from '../../molecules/SearchInput';
import SortDropdown from '../../molecules/SortDropdown';
import { Container } from './style';

interface SortSearchInputProps {
  value?: string;
  placeholder?: string;
  sortData?: string[];
  onSelect?(index: number): void;
  onChange?(): void;
}

const SortSearchInput: FC<SortSearchInputProps> = ({
  value = '',
  placeholder = '',
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
      <SortDropdown data={sortData} onSelect={onSelect} />
    </Container>
  );
};

export default SortSearchInput;
