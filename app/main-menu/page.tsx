"use client";
import { useEffect, useState } from "react";
import TopbarMainMenu from "../components/(Main Menu)/TopbarMainMenu";


const MainMenu = () => {
  const [title, setTitle] = useState("Main Menu | MSB");

  useEffect(() => {
    document.title = title;
  }, [title]); // This effect will re-run whenever the title state changes
  
  return (
    <main className="pt-[90px] mx-auto w-full min-h-screen min-w-[320px] bg-slate-50 mb-20">
      <TopbarMainMenu />
      <div className="flex flex-col w-full justify-center items-center space-y-3 md:space-x-4 md:flex-row ">
        {/* Standar Utama Card*/}
        <div className="flex flex-col w-[300px] h-[350px] md:w-[350px] md:h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-xl py-16 border-2 border-solid border-white shadow-md bg-gradient-to-r from-sky-100 to-sky-800">
              <p className="text-4xl font-bold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
                STU
              </p>
            </div>
            <p className="text-2xl font-bold text-sky-700">Standar Utama</p>
          </div>
          <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-sky-700 bg-sky-700 text-white hover:text-white hover:bg-sky-600 focus:ring focus:ring-sky-400 focus:ring-opacity-50 active:bg-sky-700 active:border-sky-700">
            Buka
          </button>
        </div>
        {/* Standar Toleransi Card */}
        <div className="flex flex-col w-[300px] h-[350px] md:w-[350px] md:h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-xl py-16 border-2 border-solid border-white shadow-md bg-gradient-to-r from-pink-200 to-pink-800">
              <p className="text-4xl font-bold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
                STR
              </p>
            </div>
            <p className="text-2xl font-bold text-pink-700">
              Standar Toleransi
            </p>
          </div>
          <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-pink-700 bg-pink-700 text-white hover:text-white hover:bg-pink-600 focus:ring focus:ring-pink-400 focus:ring-opacity-50 active:bg-pink-700 active:border-pink-700">
            Buka
          </button>
        </div>
        {/* Spesifikasi Produk Ruahan Card */}
        <div className="flex flex-col w-[300px] h-[350px] md:w-[350px] md:h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-xl py-16 border-2 border-solid border-white shadow-md bg-gradient-to-r from-violet-200 to-violet-800">
              <p className="text-4xl font-bold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
                SPR
              </p>
            </div>
            <p className="text-2xl font-bold text-violet-700">
              Spesifikasi Produk Ruahan
            </p>
          </div>
          <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-violet-700 bg-violet-700 text-white hover:text-white hover:bg-violet-600 focus:ring focus:ring-violet-400 focus:ring-opacity-50 active:bg-violet-700 active:border-violet-700">
            Buka
          </button>
        </div>
        {/* Bill of Standar Card */}
        <div className="flex flex-col w-[300px] h-[350px] md:w-[350px] md:h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-xl py-16 border-2 border-solid border-white shadow-md bg-gradient-to-r from-amber-200 to-amber-800">
              <p className="text-4xl font-bold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
                BoST
              </p>
            </div>
            <p className="text-2xl font-bold text-amber-700">
              Bill of Standar
            </p>
          </div>
          <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-amber-700 bg-amber-700 text-white hover:text-white hover:bg-amber-600 focus:ring focus:ring-amber-400 focus:ring-opacity-50 active:bg-amber-700 active:border-amber-700">
            Buka
          </button>
        </div>
        {/* End Section */}
      </div>
    </main>
  );
};

export default MainMenu;