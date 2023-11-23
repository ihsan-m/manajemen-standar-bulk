import React from "react";
import { FaTableCells } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";

const page = () => {
  return (
    <main className="w-full flex-col space-y-2">
      {/* Header */}
      <div className="flex justify-between w-full justify items-end">
        {/* Title and Buttons */}
        <div className="inline-flex space-x-4 items-end">
          <div>
            <div className="inline-flex space-x-2 items-center text-sky-700">
              <HiUsers className="text-2xl" />
              <p className="text-xl font-bold pr-2">User Management</p>

              <button className="large-button-tertiary">
                <FaTableCells  className="text-xl" />
                Matrix User
              </button>
            </div>
            <p>
              Mengatur, menambahkan, serta meninjau akun pengguna sesuai role.
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
