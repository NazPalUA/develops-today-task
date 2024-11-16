import { Container } from "@/components/Container"
import { ModelsList, SkeletonVehicleModels } from "@/components/ModelsList"
import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { getModalYears } from "@/lib/utils"
import { Suspense } from "react"

interface ResultPageProps {
	params: {
		makeId: string
		year: string
	}
}

export async function generateStaticParams() {
	try {
		const makes = await fetchVehicleMakes()
		const years = getModalYears(2014)
		const paths = []

		for (const make of makes) {
			for (const year of years) {
				paths.push({ makeId: make.MakeId.toString(), year: year.toString() })
			}
		}

		return paths
	} catch (error) {
		console.error('Error fetching static params:', error)
		return []
	}
}

export default async function ResultPage({
	params: { makeId, year },
}: ResultPageProps) {
	return (
		<Container className="flex-1 flex flex-col ">
			<h1 className="text-3xl font-bold mb-6">Vehicle Models</h1>
			<Suspense fallback={<SkeletonVehicleModels />}>
				<ModelsList params={{ makeId, year }} />
			</Suspense>
		</Container>
	)
}
