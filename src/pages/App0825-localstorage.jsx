import React from 'react'

const App = () => {
  return (
    <div>
        <h1>本地端存取資料-Local storage</h1>
        <button onClick={()=>{
            //寫入的語法
            //window.localStorage.setItem('key','value')裡面要是字串
            window.localStorage.setItem('book1','HTML');
            window.localStorage.setItem('book2','111');
            window.localStorage.setItem('hihi','ooo');
            
        }}>寫入</button>

            <button onClick={()=>{
                //key名稱
                console.log(window.localStorage.getItem('book2'));
                //使用迴圈讀取全部的資料
                for(let i=0;i<window.localStorage.length;i++){
                    let key=window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key));
                }
            }}>讀取資料</button>

            <button onClick={()=>{
                window.localStorage.removeItem("book2");
            }}>刪除指定資料</button>
            <button onClick={()=>{
                window.localStorage.clear();
            }}>刪除全資料</button>
 
    </div>
  )
}

export default App