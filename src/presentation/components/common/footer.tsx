import React from "react";
import TransitionLink from "./transition-link";
import HomeFilledIcon from "../icons/HomeFilledIcon";
import HomeIcon from "../icons/HomeIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import TicketFilledIcon from "../icons/TicketFilledIcon";
import TicketIcon from "../icons/TicketIcon";
import DocumentFilledIcon from "../icons/DocumentFilledIcon";
import DocumentIcon from "../icons/DocumentIcon";
import ProfileFilledIcon from "../icons/ProfileFilledIcon";
import ProfileIcon from "../icons/ProfileIcon";
import clsx from "clsx";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <HomeFilledIcon className="size-[24px] text-green6" />
      ) : (
        <HomeIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Cửa hàng",
    path: "/category",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <ShoppingBagIcon className="size-[24px] text-green6" />
      ) : (
        <ShoppingBagIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Ưu đãi",
    path: "/promotion",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <TicketFilledIcon className="size-[24px] text-green6" />
      ) : (
        <TicketIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <DocumentFilledIcon className="size-[24px] text-green6" />
      ) : (
        <DocumentIcon className="size-[24px] text-neutral5" />
      ),
  },
  {
    name: "Tài khoản",
    path: "/account",
    icon: ({ active }: { active: boolean }) =>
      active ? (
        <ProfileFilledIcon className="size-[20px] text-green6" />
      ) : (
        <ProfileIcon className="size-[20px] text-neutral5" />
      ),
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid bg-[#FFFFFF] px-[0] pb-[20px]"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
        boxShadow: "0px -4px 12px 0px #406A5D1F",
      }}
    >
      {NAV_ITEMS.map((item, key) => {
        return (
          <TransitionLink
            to={item.path}
            key={key}
            className="flex cursor-pointer justify-center"
          >
            {({ isActive }) => (
              <div
                className={clsx(
                  "flex w-fit flex-col items-center gap-[4px] border-t-2 border-transparent pt-[10px]",
                  { "!border-green7": isActive },
                )}
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div
                  className={`text-[11px] ${isActive ? "text-green6" : "text-gray5"}`}
                >
                  {item.name}
                </div>
              </div>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
