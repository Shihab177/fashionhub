import React from "react";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
      <SyncLoader color="#2563eb" size={15} />
    </div>
  );
}