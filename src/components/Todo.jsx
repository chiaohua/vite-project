import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditForm from"./EditForm";

const Todo = ({ todo, delTodo,toggleCompleted,toggleIsEdit,editTodo}) => {
    return (

        todo.isEdit ?<EditForm todo={todo} editTodo={editTodo}/>
        :
        //使用三源運算子的方法，控制是否套用到css規則
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* <p>停車費</p> */}
            <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
            <div>
                <FaEdit 
                style={{ cursor: 'pointer', marginRight: '5px' }}
                onClick={()=>{toggleIsEdit(todo.id)}}
                 />
                <RiDeleteBin6Fill
                    style={{ cursor: 'pointer' }}
                    onClick={() => { delTodo(todo.id) }}
                />

            </div>
        </div>
    )
}


export default Todo

