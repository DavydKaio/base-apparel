import { useState } from "react";

import Logo from "./assets/images/logo.svg";
import ImageDesktop from "./assets/images/hero-desktop.jpg";
import ImageMobile from "./assets/images/hero-mobile.jpg";
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
    <div className="w-[375px] sm:w-[1440px] sm:h-[800px] bg-gradient-to-br from-white to-Final-Gradient">
      <div className="flex justify-between">
        <div className="sm:mt-16 sm:mx-36">
          <img
            src={Logo}
            alt="Logo"
            className="my-7 ml-7 sm:mx-0 sm:my-0 w-24 sm:w-[158px]"
          />

          <img src={ImageMobile} alt="" className="sm:hidden" />

          <h1 className="text-[40px] sm:text-6xl text-center sm:text-left font-Josefin text-Dark-Grayish-Red font-semibold tracking-[0.25em] sm:tracking-[0.3em] leading-[1.1em] sm:leading-[1.2em] uppercase mt-14 sm:mt-32">
            <span className="font-thin text-Desaturated-Red">We're</span> coming
            soon
          </h1>

          <p className="text-center sm:text-left mx-auto sm:mx-0 mt-5 sm:mt-7 w-10/12 text-sm sm:text-base leading-7 font-Josefin text-Desaturated-Red">
            Hello, fellow shoppers! We're currently building our new fashion
            store. Add your emial below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <form
            className={clsx(
              "rounded-full border border-opacity-50 flex justify-between mx-8 sm:ml-0 mt-7 sm:mt-10 sm:mr-24",
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
                className="outline-none w-full py-2.5 sm:py-4 pl-5 sm:pl-8 rounded-full placeholder:text-sm sm:placeholder:text-base placeholder:text-Desaturated-Red placeholder:font-Josefin placeholder:opacity-50 mr-2"
              />

              {errorSubmit ? (
                <img src={IconError} alt="" style={{ width: 22, height: 22 }} />
              ) : (
                ""
              )}
            </div>

            <button
              className="bg-gradient-to-br from-Btn-Gradient-Start to-Btn-Gradient-End px-6 sm:px-11 rounded-full drop-shadow-lg hover:brightness-125 hover:drop-shadow-2xl"
              onClick={(e) => handleSubmit(e)}
            >
              <img src={IconBtn} alt="" style={{ width: 17, height: 17 }} />
            </button>
          </form>

          {errorSubmit ? (
            <p className="ml-12 sm:ml-8 mt-3 text-Soft-Red text-sm sm:text-base">
              Please provide a valid email
            </p>
          ) : (
            ""
          )}
        </div>
        <img src={ImageDesktop} alt="Image" className="hidden sm:block" />
      </div>
    </div>
  );
}

export default App;
