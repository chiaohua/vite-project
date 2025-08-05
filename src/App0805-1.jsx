import './css/app0805-1.css'

function App() {
    //一般變數
    const catName = "米茶"
    //屬性名稱變數
    const myClassName = "myClass"
    //方法
    function myClick() {
        alert(`我是按鈕`)
    }
    return (
        //空標籤不佔結構 return只能有一層 (fragment)

        <>
            <div>
                <p style={{color:"red"}}className={myClassName}>姓名:{catName}</p>
                <button type="button" onClick={myClick}>按鈕1</button>
                <button type="button" onClick={() => {
                    alert(`222`)
                }}>按鈕2</button>
            </div>
            {/* <button type="button" onClick={()=>{ */}
            {/* alert(`Hello`) */}
            {/* }}>按鈕</button> */}

        </>

    )
}
export default App;