//次元件
function SecondComponent({ c }) {
    //console.log(porps)

    return <>
        <h1>我是SecondComponent</h1>
        <p>SecondCompoment接收的屬性是:{c}</p>
    </>

}
function MyComponent2({ b }) {
    return (<>
        <h2>接收來自主元件的傳遞</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi sint quas autem optio non sunt soluta? Rem ad sit eius quaerat quos nihil deserunt qui laborum atque. Aliquam, magni!</p>
        <SecondComponent c={b} />
        我是:{b}
    </>
    )
}

//子元件
function MyComponent({ a, children }) {

    return (
        <>
            <h2>來自於主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat ratione, deleniti neque possimus excepturi iste dolor non numquam? Nesciunt sit provident nihil amet quibusdam placeat dolor explicabo numquam officiis!</p>
            {children}
            我是:{a}
        </>
    )
}


const App0819b = () => {
    return (
        <div>
            <h1>元件之間傳遞元件</h1><hr />
            {/* 進階 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a" />
            </MyComponent>

            <hr />
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819b