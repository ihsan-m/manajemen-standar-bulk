import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineHistory } from "react-icons/md";

const page = () => {
  return (
    <main className="w-full flex-col space-y-2">
      {/* Header */}
      <div className="flex justify-between w-full justify items-end">
        {/* Title and Buttons */}
        <div className="inline-flex space-x-4 items-end">
          <div>
            <div className="inline-flex space-x-2 items-center text-sky-700">
              <HiOutlineInboxArrowDown className="text-2xl" />
              <p className="text-xl font-bold pr-2">On Request</p>
              <button className="large-button-tertiary">
                <MdOutlineHistory className="text-xl" />
                History
              </button>
            </div>
            <p>
              Pengelolaan request masuk, harap segera diselesaikan agar proses
              dapat dilanjutkan ke user terkait.
            </p>
          </div>
        </div>
      </div>
      {/* End Header */}
      {/* Table */}
      <div className="flex justify-center">Insert Table here</div>
      {/* End Table */}
      {/* Footer */}
      <div className="flex justify-center">Sorted by Oldest Entry</div>
    </main>
  );
};

export default page;
