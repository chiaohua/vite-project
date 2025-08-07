import React from 'react'

//建立員工元件
const Employee = ({name,age,h,w}) => {
    return (
        <div className="emp">
            <h2>姓名:{name}</h2>
            <p>年齡:{age}</p>
            <p>身高:{h}</p>
            <p>體重:{w}</p>
            <p>BMI:{(w/Math.pow(h/100,2)).toFixed(2)}</p>
        </div>
    )
}

//建立物件資料
const employees = {
    emp1: { name: "員工1", age: "21" },
    emp2: { name: "員工2", age: "22" },
    emp3: { name: "員工3", age: "23" }


}
const arrEmployees=[
        {id:1,name:"員工1",age:"21",h:"158",w:"46"},
        {id:2,name:"員工2",age:"22",h:"173",w:"65"},
        {id:3,name:"員工3",age:"23",h:"181",w:"65"}
    ]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {
            arrEmployees.map((emp)=>{
                return(
                <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w}/>
            
        )
    })
    }
            {/* 呼叫員工物件 */}
            {/* 
            <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} />

            
        <Employee name="員工1"age="21"></Employee>
        <Employee name="員工2"age="28"></Employee>
 */}
        </div>
    )
}

export default App