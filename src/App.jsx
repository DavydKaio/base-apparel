import { useState } from "react";

import Logo from "./assets/images/logo.svg";
import ImageDesktop from "./assets/images/hero-desktop.jpg";
import IconBtn from "./assets/images/icon-arrow.svg";
import IconError from "./assets/images/icon-error.svg";

import "./styles/global.css";
import clsx from "clsx";

function App() {
  const [inputField, setInputField] = useState("");
  const [errorSubmit, setErrorSubmit] = useState(false);

  function handleSubmit(e) {
    if (inputField === "") {
      e.preventDefault();
      setErrorSubmit(true);
    }
  }

  return (
    <div className="w-[1440px] h-[800px] bg-gradient-to-br from-white to-Final-Gradient">
      <div className="flex justify-between">
        <div className="mt-16 mx-36">
          <img src={Logo} alt="Logo" />

          <h1 className="text-6xl font-Josefin text-Dark-Grayish-Red font-semibold tracking-[0.3em] leading-[1.1em] uppercase mt-32">
            <span className="font-thin text-Desaturated-Red">We're</span> coming
            soon
          </h1>

          <p className="mt-7 w-10/12 text-base leading-7 font-Josefin text-Desaturated-Red">
            Hello, fellow shoppers! We're currently building our new fashion
            store. Add your emial below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <form
            className={clsx(
              "rounded-full border border-opacity-50 flex justify-between mt-10 mr-24",
              {
                "border-Soft-Red border-opacity-100 border-2":
                  errorSubmit === true,
                "border-Desaturated-Red": errorSubmit === false,
              }
            )}
          >
            <div className="flex items-center w-full mr-2">
              <input
                type="email"
                value={inputField}
                onChange={(event) => setInputField(event.target.value)}
                placeholder="Email Adress"
                className="outline-none w-full py-4 pl-8 rounded-full placeholder:text-base placeholder:text-Desaturated-Red placeholder:font-Josefin placeholder:opacity-50 mr-2"
              />

              {errorSubmit ? (
                <img src={IconError} alt="" style={{ width: 28, height: 28 }} />
              ) : (
                ""
              )}
            </div>

            <button
              className="bg-gradient-to-br from-Btn-Gradient-Start to-Btn-Gradient-End px-11 rounded-full drop-shadow-lg hover:brightness-125 hover:drop-shadow-2xl"
              onClick={(e) => handleSubmit(e)}
            >
              <img src={IconBtn} alt="" style={{ width: 17, height: 17 }} />
            </button>
          </form>

          {errorSubmit ? (
            <p className="ml-8 mt-3 text-Soft-Red">
              Please provide a valid email
            </p>
          ) : (
            ""
          )}
        </div>
        <img src={ImageDesktop} alt="Image" />
      </div>
    </div>
  );
}

export default App;
