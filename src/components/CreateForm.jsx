import { useState } from "react"


// 方法1
const CreateForm = ({ todos, setTodos }) => {

    const [content, setContent] = useState('');

    //建立一個函式處理新增的todo資料
    function addData() {

        let myInput = document.getElementById('myInput');
        myInput.focus();
        
        if (content.length === 0) {
            alert('沒有輸入內容!請重新輸入');
        } else {
            setTodos([...todos, { content: content, id: Math.random(),isComplented:false}]);

            setContent('');
        }
    }


    return (
        <form className='create-form'>
            <input
                id="myInput"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => { setContent(e.target.value.trim()) }}//trim清資料中的空白
            />
            <button type="button" onClick={addData}>加入</button>
        </form>
    )
}


// 方法2
// const CreateForm = ({ addTodo }) => {    
//     // console.log(addTodo)
//     const [content, setContent] = useState('');


//     return (
//         <form className='create-form'>
//             <input
//                 id="myInput"
//                 type="text"
//                 placeholder='輸入待辦事項'
//                 value={content}
//                 onChange={(e) => { setContent(e.target.value) }}
//             />
//             <button type="button" onClick={() => {
//                 addTodo(content);
//                 setContent('');
//                 let myInput = document.getElementById('myInput');
//                 myInput.focus();    // 指定游標
//             }}>加入</button>
//         </form>
//     )
// }


export default CreateForm


