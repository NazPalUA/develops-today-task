import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonFilterForm() {
	return (
		<>
			{/* Vehicle Make Selector Skeleton */}
			<div className="flex flex-col space-y-2">
				<Label>
					<Skeleton className="h-4 w-32" />
				</Label>
				<Skeleton className="h-10 w-full rounded-md" />
			</div>

			{/* Model Year Selector Skeleton */}
			<div className="flex flex-col space-y-2">
				<Label>
					<Skeleton className="h-4 w-32" />
				</Label>
				<Skeleton className="h-10 w-full rounded-md" />
			</div>

			{/* Submit Button Skeleton */}
			<Skeleton className="h-10 w-full mt-5 rounded-md" />
		</>
	)
}
