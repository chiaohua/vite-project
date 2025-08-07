import '../css/app0806-1.css'
const App = () => {
    //資料抽離

    const photos={
        photo1:{
            imgURL:"https://i.pinimg.com/736x/19/5e/4e/195e4e8acff475a9d38e5273e2d0a396.jpg",
            title: '清爽檸檬',
            desc:"酸酸甜甜",
            btnName:'圖片來源',
            btnURL:"https://i.pinimg.com/736x/19/5e/4e/195e4e8acff475a9d38e5273e2d0a396.jpg",
        },
         photo2:{
            imgURL:"https://i.pinimg.com/736x/09/67/e6/0967e69d2bf544660d0660b22b009f18.jpg",
            title: '薄荷檸檬茶',
            desc:"最新上市",
            btnName:'圖片來源',
            btnURL:"https://i.pinimg.com/736x/09/67/e6/0967e69d2bf544660d0660b22b009f18.jpg",
        },
         photo3:{
            imgURL:"https://i.pinimg.com/736x/8c/41/3f/8c413fee1765ead10b2ca47bfaeb4f38.jpg",
            title: '各式咖啡',
            desc:"一杯只要50",
            btnName:'圖片來源',
            btnURL:"https://i.pinimg.com/736x/8c/41/3f/8c413fee1765ead10b2ca47bfaeb4f38.jpg",
        }
    }

    return (
        <>
            <div className='container'>
                
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title} </h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.imgURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
                </div>
                 <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" Card title>{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.imgURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" Card title>{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.imgURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App