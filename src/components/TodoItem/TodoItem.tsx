type TodoItemProps = {
    id: number;
    label: string;
    done: boolean;
    onChange: (id: number) => void;
}

export function TodoItem(props: TodoItemProps) {
    const { id, label, done, onChange } = props;

    function handleChange() {
        console.log('Ты нажал на checkbox! Молодчинка')
        onChange(id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={done} onChange={handleChange} />
            <span>{label}</span>
        </div>
    )
}