import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todo = ({ todo, delTodo,toggleCompleted}) => {
    return (
        //使用三源運算子的方法，控制是否套用到css規則
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* <p>停車費</p> */}
            <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
            <div>
                <FaEdit style={{ cursor: 'pointer', marginRight: '5px' }} />
                <RiDeleteBin6Fill
                    style={{ cursor: 'pointer' }}
                    onClick={() => { delTodo(todo.id) }}
                />

            </div>
        </div>
    )
}


export default Todo

