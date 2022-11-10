import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { renderWidthRedux } from '_tests/renderWidthRedux';
import MainPage from './index';

const getInput = () => {
  return screen.getByRole('textbox');
};

const TaskFalse = {
  text: 'test',
  id: 1,
  checkedTask: false,
};

const TaskTrue = {
  text: 'test2',
  id: 2,
  checkedTask: true,
};

describe('Testing Main Page ToDo', () => {
  it('Render Component', () => {
    renderWidthRedux(<MainPage />);
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });

  it('Check Work input', () => {
    renderWidthRedux(<MainPage />);
    userEvent.type(getInput(), 'test');
    expect(getInput()).toContainHTML('test');
  });

  it('Logic Work Btn Add', () => {
    renderWidthRedux(<MainPage />);
    expect(screen.queryByTestId('task-element')).toBeNull();
    userEvent.type(getInput(), 'test');
    userEvent.click(screen.getByText(/Add/i));
    expect(getInput()).toContainHTML('');
    expect(screen.queryByTestId('task-element')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Logic Work Btn Cancel', () => {
    renderWidthRedux(<MainPage />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    userEvent.type(getInput(), 'test');
    userEvent.click(screen.getByText('Cancel'));
    expect(getInput()).toContainHTML('');
  });

  it('Btn Delete Task', () => {
    renderWidthRedux(<MainPage />);
    userEvent.type(getInput(), 'test');
    userEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText('test')).toBeInTheDocument();
    userEvent.click(screen.getByText(/X/i));
    expect(screen.queryByText('test')).toBeNull();
  });

  it('Checkbox Check', () => {
    renderWidthRedux(<MainPage />, {
      main: {
        tasks: [TaskFalse],
      },
    });
    expect(screen.getByText('test')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('checkbox'));
    expect(screen.getByTestId('task-element')).toHaveStyle({ color: 'green' });
  });

  it('Btn Delete All', () => {
    renderWidthRedux(<MainPage />, {
      main: {
        tasks: [TaskFalse],
      },
    });
    expect(screen.getByText('test')).toBeInTheDocument();
    userEvent.click(screen.getByText('Delete All'));
    expect(screen.queryByText('test')).toBeNull();
  });

  it('Filter all completed', () => {
    renderWidthRedux(<MainPage />, {
      main: {
        tasks: [TaskFalse, TaskTrue],
      },
    });
    const allTasks = screen.getAllByTestId('task-element');
    expect(allTasks.length).toBe(2);
    userEvent.click(screen.getByTestId('completed'));
    expect(screen.getAllByTestId('task-element').length).toBe(1);
    expect(screen.getByTestId('task-element')).toHaveStyle({ color: 'green' });
  });

  it('Filter all notCompleted', () => {
    renderWidthRedux(<MainPage />, {
      main: {
        tasks: [TaskFalse, TaskTrue],
      },
    });
    const allTasks = screen.getAllByTestId('task-element');
    expect(allTasks.length).toBe(2);
    userEvent.click(screen.getByTestId('notCompleted'));
    expect(screen.getAllByTestId('task-element').length).toBe(1);
    expect(screen.getByTestId('task-element')).toHaveStyle({ color: 'red' });
  });
});
