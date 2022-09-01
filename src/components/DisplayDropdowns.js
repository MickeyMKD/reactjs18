import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { socials, people } from "../mockData";


export const DisplayDropdowns = () => {
    
    const [social, setSocial] = useState("")
    const [person, setperson] = useState("")
  
    return (
        <div>
        <Dropdown 
            label="Choose Social" 
            elements={socials} 
            onChangeDropdown={setSocial} />
    
        <Dropdown 
            label="Choose Person" 
            elements={people} 
            onChangeDropdown={setperson} />
  
        <p>selected social : {social}</p>
        <p>selected person : {person}</p>
      </div>
  
    )
}