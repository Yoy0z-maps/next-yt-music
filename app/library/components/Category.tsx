"use client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Category() {
  const libraryCategory = ["Playlist", "Podcast", "Song", "Album", "Artist"];
  /*
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUiState();

  function onClickCategory(item: any) {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  }
 */
  /*
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  */

  return (
    <div className="flex flex-row justify-between items-center gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
        {libraryCategory.map((item) => {
          return (
            <li
              onClick={() => () => {}}
              key={item}
              className="h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[162px] h-[42px] flex flex-row justify-between items-center p-4 bg-neutral-800 border border-neutral-600 rounded-3xl text-[14px]">
              <div>Recently Activity</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800">
            <DropdownMenuLabel className="p-4">Sort by </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem
              className="p-4"
              /*
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
              */
            >
              <span className="min-w-[40px]">
                <FiCheck size={20} />
              </span>
              Recently Activity
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="p-4"
              /*disabled*/
            >
              <span className="min-w-[40px]"></span>
              Recently Added
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]"></span>
              Recently Played
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
