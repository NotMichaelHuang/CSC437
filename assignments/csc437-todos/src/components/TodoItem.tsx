// TodoItem.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


interface TodoProps {
  task: string,
  checked: boolean,
  onDelete: () => void,
  onToggle: () => void
};

function TodoItem({ task, checked, onDelete, onToggle}: TodoProps) {
  return (
    <li className="flex items-center justify-between w-[12em]">
      <label className="flex items-center gap-2 text-lg">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onToggle}
          className="form-checkbox w-5 h-5" 
        />
        <span className={checked ? "line-through text-gray-500" : ""}>{task}</span> 
      </label>
      <button onClick={onDelete} className="text-gray-500 hover:text-red-600 transition" title="Delete task">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default TodoItem;

