"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BarChartBig, Menu } from "lucide-react";
import LogOutButton from "./logOutButton";
import { useSession } from "next-auth/react";

const MobileNav = () => {
  const pathname = usePathname();
  const session = useSession();
  const userRole = session.data?.user.role;
  return (
    <header className="flex justify-between fixed h-16 w-full shadow-sm bg-white p-5 lg:hidden">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/ucc-logo.webp" alt="logo" width={28} height={28} />
        <h2 className="md:hidden font-bold uppercase md:text-lg text-sm">University Basic <br/>School E-Voting</h2>
      </Link>
<div className="flex flex-row items-center gap-3">
<LogOutButton />

      <nav className="flex gap-3 items-center">
        <Sheet>
          <SheetTrigger>
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent className="focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important sm:w-64">
            <>
              <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image 
                  src="/ucc-logo.webp" 
                  alt="logo" 
                  width={20} 
                  height={20} 
                />
                <h2 className="font-bold uppercase">
                  University Basic School
                </h2>
              </Link>

              <ul className="mt-8 flex w-full flex-col items-start gap-5">
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
                        className=" font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4 cursor-pointer"
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
            </>
          </SheetContent>
        </Sheet>
      </nav>
      </div>
    </header>
  );
};

export default MobileNav;
