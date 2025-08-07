import React from "react"

const Card = (props) => {
//const Card = ({ imgURL, title, desc, btnName, btnURL } ) => {
    //解構 把得到的參數給props，再逐一解構出來使用
    const { imgURL, title, desc, btnName, btnURL } = props;

    return (
            <div className="Card">
                <img src={imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title } </h5>
                    <p className="card-text">{desc}</p>
                    <a href={btnURL} className="btn">{btnName }</a>
                </div>
            </div>
    )
}
export default Card