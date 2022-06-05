import React from 'react';

interface IProps {
  children: React.ReactElement;
}
export interface ITasksContext {
  id: string;
  title: string;
  addTask(): void;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const addTask = () => {
    console.log('addTasks action');
  };
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task 01', addTask}}>
      {children}
    </TasksContext.Provider>
  );
};
