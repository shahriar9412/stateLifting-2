import React from 'react'
import Child from './Components/Child'

const App = () => {
const data='I am from parent (App)'
const childDataHandler=(childData)=>{
  console.log(childData)
}
  return (
    <div>
      <Child data={data} onChildData={childDataHandler}/>
    </div>
  )
}
export default App
