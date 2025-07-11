import type { Task } from '../types/TaskTypes';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Исправить баг',
    description: 'Пользователи не могут удалить таск',
    category: 'bug',
    status: 'in progress',
    priority: 'high',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Добавить смену тем',
    description: 'Реализовать переключение между светлой и темной темой',
    category: 'feature',
    status: 'to do',
    priority: 'medium',
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Обновить документацию',
    description: 'Добавить раздел по настройке ESLint и Prettier',
    category: 'documentation',
    status: 'done',
    priority: 'low',
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'Рефакторинг',
    description: 'Упростить компонент TaskList',
    category: 'refactor',
    status: 'in progress',
    priority: 'medium',
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Написать тесты',
    description: 'Покрыть TaskItem unit-тестами',
    category: 'test',
    status: 'to do',
    priority: 'high',
    createdAt: new Date(),
  },
];
