import "server-only"

import {
	VehicleMake,
	VehicleMakesResponseSchema,
} from "../models/vehicleMakesSchema"

/**
 * Fetches vehicle makes from the VPIC API and validates the response using Zod schema.
 *
 * @returns {Promise<VehicleMake[]>} - A promise that resolves to an array of VehicleMake objects.
 * @throws {Error} - Throws an error if the fetch operation fails or the data is invalid.
 */
export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
	const API_URL =
		"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

	try {
		const response = await fetch(API_URL)

		if (!response.ok) {
			throw new Error(
				`Failed to fetch vehicle makes: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		// Validate the fetched data against the Zod schema
		const parsedData = VehicleMakesResponseSchema.safeParse(data)

		if (!parsedData.success) {
			console.error("Validation errors:", parsedData.error.issues)
			throw new Error("Invalid data structure received from API.")
		}

		return parsedData.data.Results
	} catch (error) {
		console.error("Error fetching vehicle makes:", error)
		throw error
	}
}
