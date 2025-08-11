import { useEffect } from 'react';
import '../css/app0811.css'
import { IoIosUmbrella } from "react-icons/io";
import axios from "axios";

const App = () => {
    //use渲染後使用,只呼叫一次
    useEffect(() => {
        //非同步取資料的方法
        (async () => {
            //public中的json
            const data = await axios.get('/F-C0032-001.json');

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
                    </div>
                    <img src="./wea/多雲.svg" ait="" />"

                </div>
            </div>
            <div className="card-body">
                <div className="item">

                </div>
                <div className="pop">
                    <IoIosUmbrella />

                </div>

            </div>
        </>

    )
}

export default App
