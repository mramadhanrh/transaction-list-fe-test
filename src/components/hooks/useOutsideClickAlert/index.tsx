import { RefObject, useEffect } from 'react';

interface ValidRefTarget {
  contains(target: EventTarget | null): boolean;
}

const useOutsideClickAlert = (
  callback: () => void,
  ref: RefObject<ValidRefTarget>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) callback();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOutsideClickAlert;
