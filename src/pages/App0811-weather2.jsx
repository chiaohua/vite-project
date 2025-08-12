import { IoIosUmbrella } from "react-icons/io";
import '../css/app0811.css'
import { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
    //use渲染後使用,只呼叫一次
    const [citys, setCitys] = useState([]);

    useEffect(() => {
        //非同步取資料的方法
        (async () => {
            //public中的json
            const jsonData = await axios.get('./json/F-C0032-001.json');
            // console.log(jsonData);
            // console.log(jsonData.data.cwaopendata.dataset);

            //src中的json
            //const data= await axios.get('./src/json/F-C0032-001.json');
            //console.log(jsondata.datacwaopendata.dataset);

            //取得各縣市氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            //將各縣市資訊透過setCitys方法，更新citys
            setCitys(location);

        })();
    }, []);

    return (
        <>
            {
                console.log(citys)
            }
            <h1>36小時天氣預報</h1>
            <div className="cards">
                {
                    citys.map((city) => {
                        return (
                            <div key={city.locationName}>
                                <div className="card">

                                    <div className="card-header">
                                        {city.locationName}
                                    </div>

                                    {/* 卡片內容 */}
                                    <div className="card-body">
                                        {/* 取得陣列資料後跑回圈 */}
                                        {/* 顯示各縣市的三個欄位資訊 */}
                                        {
                                            city.weatherElement[0].time.map((item,index) => {
                                                return (
                                                    // 使用map一定要有key屬性

                                                    <div className="item" key={index}>
                                                        {/* 日期 */}
                                                        <div className="date">
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined,{
                                                                    day:'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        <div className="time">
                                                             {
                                                                new Date(item.startTime).toLocaleString(undefined,{
                                                                    hour:'numeric',
                                                                    minute:'numeric'
                                                                })
                                                            }<br />
                                                            ~<br />
                                                             {
                                                                new Date(item.endTime).toLocaleString(undefined,{
                                                                    hour:'numeric',
                                                                    minute:'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        {/* 天氣圖 */}
                                                        <div className="weatherPic">
                                                            <img style={{
                                                                width:'95px',
                                                                height:'95px'
                                                            }}
                                                            src={`./wea/${item.parameter.parameterName}.svg`}alt="" />
                                                        </div>
                                                        {/* 天氣名稱 */}
                                                        <div className="weatherName">
                                                            {item.parameter.parameterName}

                                                        </div>
                                                        {/* 降雨機率pop */}

                                                        <div className="pop">
                                                            {/* icon */}
                                                            <IoIosUmbrella />
                                                            {
                                                                `${city.weatherElement[4].time[index].parameter.parameterName}%`
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </>

    )
}

export default App
