import { z } from "zod"

/**
 * Schema representing each vehicle model in the Results array.
 */
const VehicleModelSchema = z.object({
	Model_ID: z.number(),
	Make_ID: z.number(),
	Make_Name: z.string(),
	Model_Name: z.string(),
})

/**
 * Schema for the entire API response when fetching vehicle models.
 */
export const VehicleDataResponseSchema = z.object({
	Count: z.number(),
	Message: z.string(),
	SearchCriteria: z.string(),
	Results: z.array(VehicleModelSchema),
})

/**
 * TypeScript types inferred from the Zod schemas.
 */
export type VehicleModel = z.infer<typeof VehicleModelSchema>
export type VehicleDataResponse = z.infer<typeof VehicleDataResponseSchema>
