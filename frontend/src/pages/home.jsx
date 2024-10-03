import { useState } from "react";
import { generateMnemonic } from "bip39";
import Button from "../Components/Button";

const Home = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="w-100vwg flex flex-col justify-center h-screen items-center text-center bg-transparent">
      <div className="w-full block">
        <button
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition hover:scale-110"
          onClick={async function () {
            const mn = await generateMnemonic();
            console.log(mn);
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
          {mnemonic.split(" ").map((word) => (
            <div
              key={word + 1}
              className="w-[20%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition my-2 mx-2"
            >
              <span>{word}</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </div>
          ))}
          <div className="text-xs text-red-600 w-full text-center">Note this phrase it is the only way to recover your account</div>
        </div>
      )}
    </div>
  );
};

export default Home;
