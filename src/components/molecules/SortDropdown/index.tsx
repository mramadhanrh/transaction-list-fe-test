import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useRef, useState } from 'react';
import useOutsideClickAlert from '../../hooks/useOutsideClickAlert';
import { ActiveItem, Container, ContentItem, ContentList } from './style';

interface SortDropdownProps {
  activeItem?: string;
  data?: string[];
  onSelect?(index: number): void;
}

const SortDropdown: FC<SortDropdownProps> = ({
  activeItem = '',
  data = [],
  onSelect = () => {},
}) => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setActive(!active);

  useOutsideClickAlert(() => {
    setActive(false);
  }, dropdownRef);

  return (
    <Container ref={dropdownRef} onClick={toggleDropdown}>
      <ActiveItem>
        {activeItem}
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </ActiveItem>
      <ContentList active={active}>
        {data.map((item, i) => (
          <ContentItem key={i.toString()} onClick={() => onSelect(i)}>
            {item}
          </ContentItem>
        ))}
      </ContentList>
    </Container>
  );
};

export default SortDropdown;
