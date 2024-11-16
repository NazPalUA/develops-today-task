import { cn } from "@/lib/utils"
import * as React from "react"

export function Container({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"container mx-auto min-w-[320px] max-w-7xl p-5 md:px-10",
				className
			)}
			{...props}
		/>
	)
}
