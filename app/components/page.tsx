"use client";
import React from "react";

const Cobaan = () => {
  return (
    <main className="p-2">
      <div className="fixed top-0 h-10 w-10 bg-red-500">asd</div>
      <h1 className="text-center text-xl font-bold text-sky-700">
        Standar Utama Test Room
      </h1>
      <ul className="m-10 border-2 border-slate-200">
        <li className="bg-white p-2 transition-colors hover:bg-slate-200 border-b-2">
          Item 1
        </li>
        <li className="bg-white p-2 transition-colors hover:bg-slate-200 border-b-2">
          Item 1
        </li>
        <li className="bg-white p-2 transition-colors hover:bg-slate-200 border-b-2">
          Item 1
        </li>
        <li className="bg-white p-2 transition-colors hover:bg-slate-200 border-b-2">
          Item 1
        </li>
        <li className="bg-white p-2 transition-colors hover:bg-slate-200 border-b-2">
          Item 1
        </li>
      </ul>

      <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-2 ring-slate-100">
        <h3 className="text-chestnut font-medium tracking-tight">
          This is a text element
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          This is an even longer p tag element
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="small-button-primary">Detail</button>
          <button className="small-button-secondary">Print</button>
          <button className="large-button-recall">Cancel</button>
          <button className="large-button-secondary">Save</button>
          <button className="large-button-secondary-inactive">Next</button>
          <button className="large-button-primary">Buat Standar Baru +</button>
          <button className="large-button-tertiary">Matrix User</button>
        </div>
      </div>

      <div className="m-10 rounded-lg bg-white px-5 py-5 shadow-xl ring-2 ring-slate-100">
        <h3 className="font-extrabold">This is Status Standar</h3>
        <div className="flex items-center justify-center gap-2 py-5">
          <p className="status-inactive">Inactive</p>
          <p className="status-active">Active</p>
          <p className="status-waiting-for-review">Waiting For Review</p>
          <p className="status-on-review">On Review</p>
          <p className="status-expired">Expired</p>
          <p className="status-obsolete">Obsolete</p>
        </div>
      </div>

      <div className="m-10 rounded-lg bg-white px-5 py-5 shadow-xl ring-2 ring-slate-100">
        <h3 className="font-extrabold">This is Jenis Standar</h3>
        <div className="flex items-center justify-center gap-2 py-5">
          <p className="jenis-performance">Performance</p>
          <p className="jenis-olesan">Olesan</p>
        </div>
      </div>

      <div className="m-10 rounded-lg bg-white px-5 py-5 shadow-xl ring-2 ring-slate-100">
        <h3 className="font-extrabold">This is a custom input</h3>
        <div className="flex items-center justify-center gap-2 py-5">
          <p className="jenis-performance">Performance</p>
          <p className="jenis-olesan">Olesan</p>
        </div>
      </div>
    </main>
  );
};

export default Cobaan;
