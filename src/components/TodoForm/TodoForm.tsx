import { useState } from 'react';
import type { FormEvent } from 'react';
import type { TodoItemType } from '../../shared/types.ts';

type TodoFormProps = {
  onAdd: (todoItem: TodoItemType) => void;
};

export function TodoForm({ onAdd }: TodoFormProps) {
  const [label, setLabel] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedLabel = label.trim();

    if (!trimmedLabel) {
      return;
    }

    onAdd({
      id: Date.now(),
      label: trimmedLabel,
      isChecked: false,
    });

    setLabel('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
        placeholder="Введите новую задачу"
      />
      <button className="todo-form__button" type="submit">
        Добавить задачу
      </button>
    </form>
  );
}
