import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  padding: 18px;
  border-left: 5px solid ${({ theme }) => theme.color.green};
  border-radius: 4px;
`;

export const InfoWrapper = styled.div``;

export const BankName = styled.p`
  line-height: 17px;
  font-weight: 900;
  margin: 0 0 6px 0;

  & > span {
    margin: 0 4px;
    font-size: 12px;
    vertical-align: middle;
    line-height: 17px;
  }
`;

export const BeneficiaryName = styled.p`
  margin: 0 0 6px 0;
`;

export const DetailInfo = styled.p`
  margin: 0;
  & > span {
    font-size: 8px;
    margin: 0 4px;
    vertical-align: middle;
  }
`;
