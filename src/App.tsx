import { useMemo, useState } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm.tsx';
import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import './App.css';
import type { TodoItemType } from './shared/types.ts';

const mockTodos: TodoItemType[] = [
  {
    id: 1,
    label: 'Сдать чекпоинт по проектно-технологической практике СРОЧНО !!!',
    isChecked: false,
  },
  {
    id: 2,
    label: 'Сдать семестровку Кириллу!',
    isChecked: false,
  },
  {
    id: 3,
    label: 'Купить хлеб и сосиски :)',
    isChecked: true,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(mockTodos);

  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.isChecked).length;
  }, [todos]);

  const activeCount = todos.length - completedCount;

  const handleTaskCheckedChange = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked,
          };
        }

        return value;
      });
    });
  };

  function handleAddTodo(todoItem: TodoItemType) {
    setTodos((prevState) => [todoItem, ...prevState]);
  }

  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <div className="hero-card__content">
          <div className="app-logo" aria-hidden="true">
            <span className="app-logo__mark">✓</span>
          </div>
          <p className="eyebrow">daily planner</p>
          <h1 id="app-title">Мой список дел</h1>
          <p className="hero-card__text">
            Добавляй задачи, отмечай выполненные и держи учебные дедлайны под контролем.
          </p>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          <div className="hero-illustration__sheet">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-illustration__circle" />
        </div>
      </section>

      <section className="todo-card" aria-label="Список задач">
        <div className="todo-card__header">
          <div>
            <h2>Задачи на сегодня</h2>
            <p>{activeCount} активных, {completedCount} выполнено</p>
          </div>
          <span className="todo-card__badge">{todos.length}</span>
        </div>

        <TodoForm onAdd={handleAddTodo} />

        <div className="todo-list">
          {todos.map((value) => (
            <TodoItem
              id={value.id}
              key={value.id}
              label={value.label}
              done={value.isChecked}
              onChange={handleTaskCheckedChange}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
