const App = () => {
    const arrCtiys=[
        {
            cityId: 1,
            cityName :'台北市',
        },
        {
            cityId:2,
            cityName:'桃園市',
        },
    ]
  return (
    <div>
        <h1>Local storage 陣列物件資料存取</h1>
        <button onClick={() =>{
            console.log(arrCitys);
            //陣列物件轉字串
            let strCity = JSON.stringify(arrCitys);

            window.localStorage.setItem('citys',strCity)
        }}>寫入</button>

        <button onClick={()=>{
            let getData =window.localStorage.getItem('citys');

            let getArrData=JSON.parse(getData);
            console.log(getArrData);
            
        }}>讀取</button>

    </div>
  )
}

export default App