"use client";
import TopbarMainMenu from "../components/(Main Menu)/TopbarMainMenu";


const MainMenu = () => {
  return (
    <main className=" mx-auto w-full min-h-screen min-w-[320px] bg-slate-50">
      <TopbarMainMenu />
      <div className="flex flex-row w-full justify-center space-x-4">
        {/* Standar Utama Card*/}
        <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-sky-200 to-sky-800">
              <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
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
        <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-pink-200 to-pink-800">
              <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
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
        <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-violet-200 to-violet-800">
              <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
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
        <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
          <div className="space-y-4 w-full">
            <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-800">
              <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
                BoST
              </p>
            </div>
            <p className="text-2xl font-bold text-yellow-700">
              Bill of Standar
            </p>
          </div>
          <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-yellow-700 bg-yellow-700 text-white hover:text-white hover:bg-yellow-600 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 active:bg-yellow-700 active:border-yellow-700">
            Buka
          </button>
        </div>
        {/* End Section */}
      </div>
    </main>
  );
};

export default MainMenu;

// interface CardProps {
//   title: string;
//   subtitle: string;
//   color: string;
//   buttonColor: string;
// }

// const Card = ({ title, subtitle, color, buttonColor }: CardProps) => (
//   <div className="flex flex-col  w-full sm:w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
//     <div className="space-y-4 w-full">
//       <div
//         className={`flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-${color}-200 to-${color}-800`}
//       >
//         <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
//           {title}
//         </p>
//       </div>
//       <p className={`text-2xl font-bold text-${color}-700`}>{subtitle}</p>
//     </div>
//     <button
//       className={`transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-${buttonColor}-700 bg-${buttonColor}-700 text-white hover:text-white hover:bg-${buttonColor}-700 focus:ring focus:ring-${buttonColor}-400 focus:ring-opacity-50 active:bg-${buttonColor}-700 active:border-${buttonColor}-700`}
//     >
//       Buka
//     </button>
//   </div>
// );

// <main className="mx-auto w-full min-h-screen min-w-[320px] bg-slate-50">
//   <TopbarMainMenu />
//   <div className="flex flex-row w-full justify-center space-x-4">
//     <Card
//       title="STU"
//       subtitle="Standar Utama"
//       color="sky"
//       buttonColor="sky"
//     />
//     <Card
//       title="STR"
//       subtitle="Standar Toleransi"
//       color="pink"
//       buttonColor="pink"
//     />
//     <Card
//       title="SPR"
//       subtitle="Spesifikasi Produk Ruahan"
//       color="violet"
//       buttonColor="violet"
//     />
//     <Card
//       title="BoST"
//       subtitle="Bill of Standar"
//       color="yellow"
//       buttonColor="yellow"
//     />
//   </div>
// </main>

// <main className=" mx-auto w-full min-h-screen min-w-[320px] bg-slate-50">
//   <TopbarMainMenu />
//   <div className="flex flex-row w-full justify-center space-x-4">
//     {/* Standar Utama Card*/}
//     <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
//       <div className="space-y-4 w-full">
//         <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-sky-200 to-sky-800">
//           <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
//             STU
//           </p>
//         </div>
//         <p className="text-2xl font-bold text-sky-700">Standar Utama</p>
//       </div>
//       <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-sky-700 bg-sky-700 text-white hover:text-white hover:bg-sky-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
//         Buka
//       </button>
//     </div>
//     {/* Standar Toleransi Card */}
//     <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
//       <div className="space-y-4 w-full">
//         <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-pink-200 to-pink-800">
//           <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
//             STR
//           </p>
//         </div>
//         <p className="text-2xl font-bold text-pink-600">Standar Toleransi</p>
//       </div>
//       <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-pink-600 bg-pink-600 text-white hover:text-white hover:bg-pink-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
//         Buka
//       </button>
//     </div>
//     {/* Spesifikasi Produk Ruahan Card */}
//     <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
//       <div className="space-y-4 w-full">
//         <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-violet-200 to-violet-800">
//           <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
//             SPR
//           </p>
//         </div>
//         <p className="text-2xl font-bold text-violet-600">Spesifikasi Produk Ruahan</p>
//       </div>
//       <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-violet-600 bg-violet-600 text-white hover:text-white hover:bg-violet-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
//         Buka
//       </button>
//     </div>
//     {/* Bill of Standar Card */}
//     <div className="flex flex-col w-[350px] h-[400px] px-5 py-5 relative bg-white rounded-xl shadow-xl hover:shadow-2xl justify-between">
//       <div className="space-y-4 w-full">
//         <div className="flex w-full items-center justify-center rounded-md py-16 border-2 border-solid border-white shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-800">
//           <p className="text-4xl font-extrabold text-white text-center [text-shadow:0px_4px_4px_#00000040]">
//             BoST
//           </p>
//         </div>
//         <p className="text-2xl font-bold text-yellow-600">Bill of Standar</p>
//       </div>
//       <button className="transition-colors w-full inline-flex justify-center items-center border font-semibold rounded-md py-2 border-yellow-600 bg-yellow-600 text-white hover:text-white hover:bg-yellow-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
//         Buka
//       </button>
//     </div>
//     {/* End Section */}
//   </div>
// </main>
