import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { RewardList } from "./reward-list";
import SearchIcon from "../icons/SearchIcon";

const Content = () => {
  return (
    <div className="flex flex-col gap-[16px] px-[16px]">
      <div className="text-lg font-medium text-[#22252B]">Danh sách quà tặng</div>
      <SearchBarNoPopup
        placeholder="Tìm kiếm"
        className="h-[40px] rounded-[24px]"
        suffix={<SearchIcon className="size-[18px] text-[#8E8E8E]" />}
      />
      <RewardList />
    </div>
  );
};

export default Content;
