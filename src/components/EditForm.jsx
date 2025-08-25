import { useState } from "react";

const EditForm = ({ todo,editTodo }) => {

    const [content, setContent] = useState(todo.content);

    const editData = () => {

        let myInput = document.getElementById('myInput');
        myInput.focus();

        if (content.length === 0) {
            alert('沒有輸入代辦事項!請重新輸入');
        } else {
           editTodo(todo.id,content);
        }
    }
        const handleSubmit=(e)=>{
            e.prevenDefault();
            editTodo(todo.id,content); 

    }
    return (
        <form className='create-form' /*onSubmit={handleSubmit}*/>
            <input
                id="myInput"
                type="text"
                placeholder="輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value.trim())
                }}
            />
            <button type="button" onClick={editData}>完成</button>
            
        </form>
    )
}
export default EditForm
