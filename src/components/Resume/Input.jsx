import { useState } from "react";
import Preview from "./Preview";

const Input = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <div className="flex gap-3 justify-between">
        <div className="bg-red-100 w-6/12 flex justify-center items-center border">
          <div className="flex flex-col justify-start gap-5 border">

            <div>
              <label htmlFor="fullname" className="block text-xs font-medium text-gray-700"> Full name </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="mt-1 h-8 rounded border-gray-200 shadow-sm sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="mobileNo" className="block text-xs font-medium text-gray-700"> Contact No. </label>
              <input
                type="text"
                id="mobileNo"
                placeholder="Enter your full name"
                className="mt-1 h-8 rounded border-gray-200 shadow-sm sm:text-sm"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>


            <div>
              <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 h-8 rounded border-gray-200 shadow-sm sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


          </div>
        </div>
        <Preview
          {...{
            name,
            number,
            email
          }}
        />
      </div>
    </>
  )
}

export default Input;
