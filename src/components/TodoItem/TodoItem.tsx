type TodoItemProps = {
  id: number;
  label: string;
  done: boolean;
  onChange: (id: number) => void;
};

export function TodoItem(props: TodoItemProps) {
  const { id, label, done, onChange } = props;

  function handleChange() {
    onChange(id);
  }

  return (
    <label className={`todo-item ${done ? 'todo-item--done' : ''}`}>
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={done}
        onChange={handleChange}
      />
      <span className="todo-item__custom-checkbox" aria-hidden="true" />
      <span className="todo-item__label">{label}</span>
    </label>
  );
}
