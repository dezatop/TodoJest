import { FC } from 'react';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { main } from 'store/main';
import { IList } from 'types';
import { Cheked, Close } from './styled';

export const ToDoElement: FC<IList> = ({ text, id, checkedTask }) => {
  const dispatch = useAppDispatch();
  // const [checked, setChecked] = useState<boolean>(checkedTask);

  const handleChange = () => {
    // setChecked(!checked);
    dispatch(main.actions.CHECKED_CHANGE({ id, checked: !checkedTask }));
  };

  const deleteCrurrent = () => {
    dispatch(main.actions.DELETE_TASK(id));
  };

  return (
    <Cheked
      data-testid="task-element"
      checked={checkedTask}
    >
      <input
        data-testid="checkbox"
        onChange={handleChange}
        checked={checkedTask}
        type="checkbox"
      />
      <p>{text}</p>
      <Close onClick={deleteCrurrent}>X</Close>
    </Cheked>
  );
};
