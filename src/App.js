import {useState} from "react"

import { movies } from "./mock/mockData"

// import { Homework } from "./components/Homework";

import {Input} from "./components/common/Input";

const App = () => {

  const [fieldType, setFieldType] = useState("password")

  const onMouseDownHandler = () => {
    setFieldType("text")
  }

  const onMouseUpHandler = () => {
    setFieldType("password")
  }

  return (
    <div>
      {/* <Homework movies={movies}/>  */}

      <Input 
        type="text"
        name="username"
        placeholder="Please enter Username" />

      <Input
            placeholder="Please enter Password"
            name="password" 
            type={fieldType} 
            mouseDown={onMouseDownHandler} 
            mouseUp={onMouseUpHandler} />

      <Input
          type="text" 
          name="comment"
          placeholder="Please enter Comment"
      />
    </div>
  );
}

export default App