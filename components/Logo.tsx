import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/rwe-logo.svg" alt="RWE logo" width={120} height={36} priority className="object-contain" />
      <span className="ml-3 text-red-600 font-bold text-lg hidden sm:inline">RWE Wrestling</span>
    </div>
  );
}
