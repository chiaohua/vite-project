import { useState } from "react"

function App0819c() {
    const [curImg, setCurImg] = useState(2);
    const arrPhotots = [
        "./images/p1.jpg",
        "./images/p2.jpg",
        "./images/p3.jpg",
        "./images/p4.jpg",

    ]

    return (
        <div>
            <h1>小圖換大圖</h1><hr />
            <div>
                <div>
                     {
                        arrPhotots.map((photo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={photo}
                                    alt=""
                                    width={120}
                                    height={80}
                                    style={{ cursor: "pointer" }}


                                    // 左鍵一下縮圖時
                                    onClick={() => {
                                        // 更新最新縮圖的索引值
                                        setCurImg(index);
                                        let showPic = document.querySelector('#showPic');
                                        showPic.style.display = "block";
                                    }}


                                />
                            )
                        })
                    }

               </div>
                <div>

                    <img 
                    id="showPic"
                    src={arrPhotots[curImg]} 
                    alt="" 
                    width={420} 
                    height={280} 
                    style={{ display:"none" }}
                    />
                </div>
            </div>
        </div >
    )
}
export default App0819c
