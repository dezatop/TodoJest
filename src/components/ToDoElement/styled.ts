import styled from '@emotion/styled';

type CheckedType = {
  checked: boolean;
};

const Cheked = styled.div<CheckedType>`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border: 3px solid ${({ checked }) => (checked ? 'green' : 'red')};
  color: ${({ checked }) => (checked ? 'green' : 'red')};
  gap: 16px;
  font-family: cursive;
  font-size: 20px;

  > input {
    width: 18px;
    height: 24px;
  }
`;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 0px;
  color: black;
`;

export { Cheked, Close };
