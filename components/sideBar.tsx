"use client";

import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import LogOutButton from "./logOutButton";
import { useSession } from "next-auth/react";
import { AdminNavLinks } from "@/data/adminNavLinks";
import { BarChartBig, Settings } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const session = useSession();
  const userRole = session.data?.user.role;

  return (
    <aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-primary/40 lg:flex lg:fixed">
      <div className="flex size-full flex-col gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-center items-center gap-2 md:py-2"
        >
          <Image src="/ucc-logo.webp" alt="UCC Logo" width={30} height={30} />
          <h2 className="font-bold uppercase text-center">
            University Basic School
          </h2>
        </Link>

        {/* Left side navigation */}
        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <ul className="hidden w-full flex-col items-start gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  className={`${
                    isActive &&
                    " w-full bg-primary-foreground bg-cover text-primary rounded-xl"
                  } font-semibold text-[18px] leading-[140%] flex whitespace-nowrap text-dark-700 hover:bg-primary-foreground hover:w-full hover:rounded-xl`}
                  key={link.route}
                >
                  <Link
                    className="p-16-semibold flex size-full gap-4 p-4"
                    href={link.route}
                  >
                    <link.icon />

                    {link.label}
                  </Link>
                </li>
              );
            })}
            {userRole === "user" && (
              <li
                className={`${
                  "/results" == pathname &&
                  " w-full bg-primary-foreground bg-cover text-primary rounded-xl"
                } font-semibold text-[18px] leading-[140%] flex whitespace-nowrap text-dark-700 hover:bg-primary-foreground hover:w-full hover:rounded-xl`}
              >
                <Link
                  href="/results"
                  className="p-16-semibold flex size-full gap-4 p-4"
                >
                  <BarChartBig />
                  Results
                </Link>
              </li>
            )}
          </ul>
          {/* I can copy the above for the same styling. But in our case, I will use only profile stuff below */}
          <LogOutButton />
          {/* SIGNED OUT */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
