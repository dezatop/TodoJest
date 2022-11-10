import styled from '@emotion/styled';

type ButtonType = {
  version?: string;
};

const Wrapper = styled.div`
  padding: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 18px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #4f4f4f;
  font-family: cursive;

  &:focus {
    border-color: green;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.div<ButtonType>`
  white-space: nowrap;
  font-family: cursive;
  padding: 10px 28px;
  background: ${({ version }) =>
    version === 'add' ? 'lightblue' : 'darksalmon'};
  border-radius: 3px;
  color: #473e3e;
  font-weight: 600;
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  max-height: 100vh;
`;

const Filter = styled.div`
  padding: 16px;
  min-height: 100vh;
  width: 270px;
  background: darkslategrey;
  color: #fff;
  font-weight: 500;
  font-size: 18px;

  h4 {
    font-size: 28px;
    font-family: cursive;
    color: lightskyblue;
    border-bottom: 2px solid lightskyblue;
    padding-bottom: 8px;
  }
`;

const Filters = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 13px;

  input {
    width: 18px;
    height: 18px;
  }
`;

const ListTodo = styled.div`
  margin-top: 24px;
  padding-top: 8px;
  border-top: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export {
  Wrapper,
  Input,
  BtnGroup,
  Button,
  Wrap,
  ListTodo,
  Container,
  Filter,
  Filters,
};
