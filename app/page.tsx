import { Container } from "@/components/Container"
import { FilterForm, SkeletonFilterForm } from "@/components/FilterForm"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { Suspense } from "react"

export default async function Home() {
	return (
		<Container className="flex-1 flex items-center justify-center">
			<Card className="w-full max-w-md bg-background/80 backdrop-blur-sm">
				<CardHeader>
					<CardTitle className="flex items-center justify-between">
						Find Your Perfect Car
						<Sparkles className="h-5 w-5 text-primary animate-ping" />
					</CardTitle>
					<CardDescription>
						Select vehicle make and model year to start your search
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-8">
					<Suspense fallback={<SkeletonFilterForm />}>
						<FilterForm />
					</Suspense>
				</CardContent>
			</Card>
		</Container>
	)
}
