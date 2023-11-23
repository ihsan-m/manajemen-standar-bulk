import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { HiMiniTableCells } from 'react-icons/hi2'
import { BsInfoCircle } from "react-icons/bs";

const page = () => {
  return (
    <main className="w-full flex-col space-y-2">
    {/* Header */}
    <div className="flex justify-between w-full justify items-end">
      {/* Title and Buttons */}
      <div className="inline-flex space-x-4 items-end">
        <div>
          <div className="inline-flex space-x-2 items-center text-sky-700">
            <HiMiniTableCells className="text-2xl" />
            <p className="text-xl font-bold pr-2">Internal Management</p>
            <BsInfoCircle className="text-xl"/>
          </div>
          <p>Pengelolaan per Pcs serta pengiriman Standar Antar Departemen</p>
        </div>
        <button className="large-button-tertiary">
          <BsQrCode className="text-xl" />
          Scan Search
        </button>
      </div>
    </div>
    {/* End Header */}
    {/* Table */}
    <div className="flex justify-center">Insert Table here</div>
    {/* End Table */}
    {/* Footer */}
    <div className="flex justify-center">Showing 20 out of n Entries</div>
  </main>
  )
}

export default page