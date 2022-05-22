import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 43px;
`;

export const ActiveItem = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  background-color: ${({ theme }) => theme.color.white};
  text-align: right;
  border-radius: 4px;
  white-space: nowrap;

  & > span {
    color: ${({ theme }) => theme.color.orange};
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const ContentItem = styled.button`
  padding: 12px;
  text-align: left;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.15s background-color ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.linen};
  }
`;

export const ContentList = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.platinum};
  border-radius: 4px;

  transform: ${({ active }) =>
    active ? `translateY(0) scaleY(1)` : `translateY(-5px) scaleY(0.8)`};
  transform-origin: top center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 0.15s ease-out;
  transition-property: transform, opacity;
  pointer-events: ${({ active }) => (active ? 'initial' : 'none')};

  & > button {
    cursor: ${({ active }) => (active ? 'pointer' : 'initial')};
  }
`;
