import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function NavigationBar(props) {
  const { data: session, status } = useSession();
  return (
    <div className="fixed w-[100%] h-16 top-0 z-[999]">
      <div className=" flex justify-between bg-[#0E1014] w-full shadow-xl shadow-[#393d4506] py-2 px-8 top-0 left-0 right-0">
        <div className=" flex justify-start">
          <h1 className=" text-white py-2">H-</h1>
          <h1 className=" py-2 text-[#FFE5B2]">STREAMER</h1>
        </div>
        <div
          className={`${
            !props.isStreaming
              ? "flex justify-between w-[110px]"
              : "flex justify-between w-[42px]"
          }`}
        >
          {!props.isStreaming && session ? (
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 800,
                duration: 0.5,
                damping: 50,
              }}
              className=" mt-auto mb-auto text-white cursor-pointer hover:text-[#ffc277]"
            >
              <Link href="/streaming">Stream</Link>
            </motion.h1>
          ) : (
            <div />
          )}
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 800,
                    duration: 0.5,
                    damping: 40,
                  }}
                >
                  <Avatar className=" cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className=" text-[#ffa052]">
                      H
                    </AvatarFallback>
                  </Avatar>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className=" text-[#7a7a7a]">
                  {session.user.email ?? ""}
                </DropdownMenuLabel>
                <DropdownMenuLabel className=" text-[#d87e33]">
                  {session.user.name ?? ""}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/profile">
                    <DropdownMenuItem className=" cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem className=" cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="billing">
                    <DropdownMenuItem className=" cursor-pointer">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className=" cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
