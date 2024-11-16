import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonVehicleModels() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{[...Array(6)].map((_, i) => (
				<Card
					key={i}
					className="w-full hover:shadow-lg transition-shadow duration-300"
				>
					<CardHeader>
						<Skeleton className="h-7 w-1/2 mb-2 rounded-md" />
					</CardHeader>
					<CardContent className="space-y-3">
						<Skeleton className="h-6 w-32 rounded-full" />
						<Skeleton className="h-5 w-28 rounded-md" />
					</CardContent>
				</Card>
			))}
		</div>
	)
}
