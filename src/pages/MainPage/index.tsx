import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { ToDoElement } from 'components/ToDoElement';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { main } from 'store/main';
import {
  Wrapper,
  Input,
  BtnGroup,
  Button,
  Wrap,
  ListTodo,
  Container,
  Filter,
  Filters,
} from './styled';

type FilterType = 'completed' | 'notCompleted' | '';

const objFilter = {
  completed: true,
  notCompleted: false,
};

const MainPage = () => {
  const dispatch = useAppDispatch();
  const tasks = useSelector(main.selectors.tasks);
  const [value, setValue] = useState<string>('');
  const [filter, setFilter] = useState<FilterType>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const cancelClick = () => {
    setValue('');
  };

  const clearTasks = () => {
    dispatch(main.actions.CLEAR_TASK());
  };

  const filterClick = (payload: FilterType) => {
    setFilter(payload);
  };

  const taskCallback = useMemo(() => {
    if (filter) {
      return tasks.filter((el) => el.checkedTask === objFilter[filter]);
    }
    return tasks;
  }, [tasks, filter]);

  const addBtnClick = () => {
    if (value.length) {
      dispatch(
        main.actions.ADD_NEW_TASK({
          text: value,
          id: uuidv4(),
          checkedTask: false,
        })
      );
      setValue('');
    }
  };

  return (
    <Container>
      <Filter>
        <h4>Filter</h4>
        <Filters>
          <input
            disabled={filter === 'notCompleted'}
            data-testid="completed"
            onChange={(e) => {
              filterClick(e.target.checked ? 'completed' : '');
            }}
            type="checkbox"
          />
          <span>Only Completed</span>
        </Filters>
        <Filters>
          <input
            disabled={filter === 'completed'}
            data-testid="notCompleted"
            onChange={(e) => {
              filterClick(e.target.checked ? 'notCompleted' : '');
            }}
            type="checkbox"
          />
          <span>Only Not Completed</span>
        </Filters>
      </Filter>
      <Wrapper>
        <Wrap>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Add task...."
            type="text"
          />
          <BtnGroup>
            <Button
              onClick={addBtnClick}
              version="add"
            >
              Add
            </Button>
            <Button onClick={cancelClick}>Cancel</Button>
            <Button onClick={clearTasks}>Delete All</Button>
          </BtnGroup>
        </Wrap>
        <ListTodo>
          {taskCallback.map(({ id, text, checkedTask }) => (
            <ToDoElement
              checkedTask={checkedTask}
              id={id}
              key={id}
              text={text}
            />
          ))}
        </ListTodo>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
