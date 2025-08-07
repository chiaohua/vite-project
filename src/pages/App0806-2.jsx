import Card from '../components/Card'
import '../css/app0806-1.css'
const App = () => {

    const photos = {
        photo1: {
            imgURL: "https://i.pinimg.com/736x/19/5e/4e/195e4e8acff475a9d38e5273e2d0a396.jpg",
            title: '清爽檸檬',
            desc: "酸酸甜甜",
            btnName: '圖片來源',
            btnURL: "https://i.pinimg.com/736x/19/5e/4e/195e4e8acff475a9d38e5273e2d0a396.jpg",
        },
        photo2: {
            imgURL: "https://i.pinimg.com/736x/09/67/e6/0967e69d2bf544660d0660b22b009f18.jpg",
            title: '薄荷檸檬茶',
            desc: "最新上市",
            btnName: '圖片來源',
            btnURL: "https://i.pinimg.com/736x/09/67/e6/0967e69d2bf544660d0660b22b009f18.jpg",
        },
        photo3: {
            imgURL: "https://i.pinimg.com/736x/8c/41/3f/8c413fee1765ead10b2ca47bfaeb4f38.jpg",
            title: '各式咖啡',
            desc: "一杯只要50",
            btnName: '圖片來源',
            btnURL: "https://i.pinimg.com/736x/8c/41/3f/8c413fee1765ead10b2ca47bfaeb4f38.jpg",
        }

    }
    return (
        <>
            <div className="container">
                <Card 
                imgURL={photos.photo1.imgURL}
                title={photos.photo1.title}
                desc={photos.photo1.desc}
                btnName={photos.photo1.btnName}
                btnURL={photos.photo1.ibtnURL}
                ></Card>

                <Card 
                imgURL={photos.photo2.imgURL}
                title={photos.photo2.title}
                desc={photos.photo2.desc}
                btnName={photos.photo2.btnName}
                btnURL={photos.photo2.ibtnURL}
                ></Card>

                <Card 
                imgURL={photos.photo3.imgURL}
                title={photos.photo3.title}
                desc={photos.photo3.desc}
                btnName={photos.photo3.btnName}
                btnURL={photos.photo3.ibtnURL}
                ></Card>

            </div>
        </>
    )
}
export default App