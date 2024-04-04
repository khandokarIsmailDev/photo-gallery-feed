import Link from "next/link";
import React from "react";
import Image from "next/image";

const SiteLogo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/logo.png"
        alt="ismail"
        height={100}
        width={165}
      />
    </Link>
  );
};

export default SiteLogo;
