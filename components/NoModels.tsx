import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default async function NoModels() {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>No Results Found</AlertTitle>
			<AlertDescription>
				There are no models matching your search criteria. Please try adjusting
				your search parameters.
			</AlertDescription>
		</Alert>
	)
}
