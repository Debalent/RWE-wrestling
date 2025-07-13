import React from "react";
import Image from "next/image";

// Logo component for RWE Wrestling
// Make sure 'image000000.jpg' is placed in the public folder of your project
export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/image000000.jpg"  // Path to logo in the public folder
        alt="RWE Wrestling Logo"
        width={150}
        height={50}
        priority
        className="object-contain"
      />
      <span className="ml-3 text-red-600 font-bold text-xl">RWE Wrestling</span>
    </div>
  );
}
