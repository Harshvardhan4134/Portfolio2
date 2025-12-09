import React from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-3 bg-black text-white px-4 py-6 md:px-6">
      <SocialMediaButtons />
      <p className="text-xs text-white text-center">
        © {year} {config.author}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
