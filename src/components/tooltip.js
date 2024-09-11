import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from "@/components/ui/tooltip"

export default function ToolTips({children, label, distance=4, enable=true}){
    return (
        enable ? (
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={distance}>{label}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ) : children
    )
}