import { Container } from "@/components/Container"
import { ModelsList, SkeletonVehicleModels } from "@/components/ModelsList"

import { fetchVehicleMakes } from "@/lib/fetchVehicleMakes"
import { Suspense } from "react"

interface ResultPageProps {
	params: {
		makeId: string
		year: string
	}
}

export async function generateStaticParams() {
	const makes = await fetchVehicleMakes()
	const currentYear = new Date().getFullYear()
	const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
		(2015 + i).toString()
	)

	const paths = []

	for (const make of makes) {
		for (const year of years) {
			paths.push({ makeId: make.MakeId.toString(), year })
		}
	}

	return paths
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
