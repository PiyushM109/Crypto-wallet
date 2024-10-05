import { useState } from "react";
import { generateMnemonic } from "bip39";
import { useNavigate } from "react-router";

const Home = () => {
  const [mnemonic, setMnemonic] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-100vwg flex flex-col justify-center h-screen items-center text-center bg-transparent">
      <div className="w-full block">
        <button
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition hover:scale-110"
          onClick={async function () {
            const mn = await generateMnemonic();
            setMnemonic(mn);
          }}
        >
          <span>Create Seed Phrase</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </button>
      </div>
      {mnemonic && (
        <div className="w-[30%] flex flex-wrap m-2">
          {mnemonic.split(" ").map((word, index) => (
            <div
              key={index}
              className="w-[20%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition my-2 mx-2"
            >
              <span>{word}</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </div>
          ))}
          <div className="text-xs text-red-600 w-full text-center">
            Note this phrase it is the only way to recover your account
          </div>
          <div className="w-full text-center">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-450 px-6 font-medium text-neutral-200"
            onClick={()=>{
              navigate("/create_keys")
            }}
            >
              <span>Continue</span>
              <div className="ml-1 transition duration-300 group-hover:rotate-[360deg]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
