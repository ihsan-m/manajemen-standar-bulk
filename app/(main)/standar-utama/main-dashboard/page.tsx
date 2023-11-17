import React from "react";
import { MdTab } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const MainDashboard = () => {
  return (
    <main className="w-full flex-col space-y-2">
      {/* Header */}
      <div className="flex justify-between w-full justify items-end">
        {/* Title and Buttons */}
        <div className="inline-flex space-x-4 items-end">
          <div>
            <div className="inline-flex space-x-2 items-center text-sky-700">
              <MdTab className="text-2xl" />
              <p className="text-xl font-bold">Main Dashboard</p>
            </div>
            <p>Pemantauan Keseluruhan Standar STU di Dashboard</p>
          </div>

          {/* Button Formulator Only */}
          <button className="large-button-primary">
            Buat Standar Baru
            <GoPlus className="text-xl" />
          </button>
          {/* Button Formulator Only */}

          <button className="large-button-tertiary">
            <BsQrCode className="text-xl" />
            Scan Search
          </button>
        </div>
        {/* Counter Standar */}
        <div className="inline-flex pr-2 pl-2 pt-2 pb-1 bg-white rounded-md border border-slate-300 justify-center items-center gap-2.5">
          {/* <button className="flex h-full w-full bg-slate-500">

          </button> */}
          <div className="flex flex-col items-center">
            <p className="status-inactive">Inactive</p>
            <a>12</a>
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="flex flex-col items-center">
            <p className="status-active">Active</p>
            <a>12</a>
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="flex flex-col items-center">
            <p className="status-waiting-for-review">Waiting For Review</p>
            <a>12</a>
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="flex flex-col items-center">
            <p className="status-on-review">On Review</p>
            <a>12</a>
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="flex flex-col items-center">
            <p className="status-expired">Expired</p>
            <a>12</a>
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="flex flex-col items-center">
            <p className="status-obsolete">Obsolete</p>
            <a>12</a>
          </div>
        </div>
        {/* Archive Button */}
        <button className="large-button-gray">
          <FaBoxArchive className="text-xl" />
          Archived
        </button>
      </div>
      {/* End Header */}
      {/* Table */}
      <div className="flex justify-center">Insert Table here</div>
      {/* End Table */}
      {/* Pagination */}
      <div className="flex justify-center"> Insert Pagination Here</div>
      {/* Footer */}
      <div className="flex justify-center">Showing 20 out of n Entries</div>
    </main>
  );
};

export default MainDashboard;
