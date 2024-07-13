import { useEffect, useState } from "react";
import Preview from "./Preview";
import Index from "../Forms/Index";
import Nav from "./Nav";

const Input = () => {
  const [pageno, setPageno] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [place, setPlace] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(()=>{
    console.log(pageno)
  },[pageno])

  return (
    <>
      <div className="flex gap-3 justify-between">
        <div className="bg-red-100 w-6/12 flex flex-col justify-center items-center border">
        <Nav {...{pageno,setPageno}}/> 
          <Index
            {...{
              pageno,
              name,
              setName,
              email,
              setEmail,
              number,
              setNumber,
              place,
              setPlace,
              summary,
              setSummary,
              experience,
              setExperience,
              skills,
              setSkills,
            }}
          />
        </div>
        <Preview
          {...{
            name,
            number,
            email,
            place,
            summary,
          }}
        />
      </div>
    </>
  );
};

export default Input;
