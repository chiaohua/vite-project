import { IoIosUmbrella } from "react-icons/io";
import '../css/app0811.css'
import { useEffect } from 'react';
import axios from "axios";

const App = () => {
    //use渲染後使用,只呼叫一次
    useEffect(() => {
        //非同步取資料的方法
        (async () => {
            //public中的json
            const data = await axios.get('./json/F-C0032-001.json');

            //src中的json
            //const data= await axios.get('./src/json/F-C0032-001.json');
            console.log(data.datacwaopendata.dataset);
        })();
    }, []);

    return (
        <>
            <h1>36小時天氣預報</h1>
            <div className="cards">
                <div className="card">

                    <div className="card-header">
                        台北市
                    </div>

                    {/* 卡片內容 */}
                    <div className="card-body">
                        {/* 取得陣列資料後跑回圈 */}
                        <div className="item">
                            {/* 日期 */}
                            <div className="time">
                                上午6:00<br />
                                ~<br />
                                下午6:00<br />
                            </div>
                            {/* 天氣圖 */}
                            <div className="weatherPic">
                                <img src="./wea/多雲.svg" alt="" />
                            </div>
                            {/* 天氣名稱 */}
                            <div className="weatherName">
                                多雲
                            </div>
                            {/* 降雨機率pop */}
                        </div>
                        <div className="pop">
                            {/* icon */}
                            <IoIosUmbrella />
                            80%
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default App
