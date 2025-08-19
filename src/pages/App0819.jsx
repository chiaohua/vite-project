//建立子元件
function MyComponent(props) {
    console.log(props)
    return <>
        {/* 倆個div要包<> */}
        <div>Hello</div>
        <div>{props.a}</div>
        <div>{props.b}</div>
    </>

}
function MyComponent2(a, b) {

    return <>
        {/* 倆個div要包<> */}
        <div>Hello</div>
        <div>{a}</div>
        <div>{b}</div>
    </>
}

const App0819 = () => {
    return (<>
        <MyComponent a="我是屬性a" b="我是b屬性" />
        <MyComponent2 a="我是屬性a" b="我是b屬性" />
    </>
    )
}

export default App0819