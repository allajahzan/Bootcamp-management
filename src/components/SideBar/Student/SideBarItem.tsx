import { useSelector } from "react-redux";
import { stateType } from "../../../redux/store";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { LucideProps } from "lucide-react";

interface propTypes {
    Image: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    text: string;
    handleSideBarItems?: (event: React.MouseEvent<HTMLLIElement>) => void;
    color?: string;
}

function SideBarItem({ Image, text, handleSideBarItems, color }: propTypes) {
    const isShrinkSideBarStudent = useSelector(
        (state: stateType) => state.isShrinkSideBarStudent
    );

    return (
        <TooltipProvider>
            {isShrinkSideBarStudent ? (
                <Tooltip>
                    <TooltipTrigger className="w-full">
                        <li
                            data-text={text}
                            onClick={handleSideBarItems}
                            className={`cursor-pointer ${color === "" ? "" : color
                                } hover:bg-gray-100`}
                        >
                            <div className="flex items-center p-2">
                               <Image />
                            </div>
                        </li>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p style={{ fontSize: "13px" }}>{text}</p>
                    </TooltipContent>
                </Tooltip>
            ) : (
                <li
                    data-text={text}
                    onClick={handleSideBarItems}
                    className={`group cursor-pointer ${color === "" ? "" : color
                        } hover:bg-gray-100`}
                >
                    <div className={`flex items-center p-2`}>
                        <div className="flex items-center gap-5">
                            {/* className={`transform rotate-[0deg] transition-transform duration-300 ${color === ""? "" : "group-hover:rotate-[360deg]"} `} */}
                            <Image />
                            {!isShrinkSideBarStudent && (
                                <p className="pt-0.5 font-extrabold tracking-wide text-nowrap">
                                    {text}
                                </p>
                            )}
                        </div>
                    </div>
                </li>
            )}
        </TooltipProvider>
    );
}

export default SideBarItem;
