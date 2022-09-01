import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

const socials = [
  {value: "facebook", name: "Facebook"},
  {value: "insta", name: "Instagram"},
  {value: "snap", name: "SnapChat"},
  {value: "tiktok", name: "Tik-Tok"},
]

const people = [
  {value: "1", name: "Alek"},
  {value: "2", name: "Bojan"},
  {value: "3", name: "Stefani"},
  {value: "4", name: "Kiko"},
]

const App = () => {

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
  );
}

export default App