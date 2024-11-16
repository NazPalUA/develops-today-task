import { z } from "zod"

/**
 * Schema representing each vehicle make in the Results array.
 */
const VehicleMakeSchema = z.object({
	MakeId: z.number(),
	MakeName: z.string(),
	VehicleTypeId: z.number(),
	VehicleTypeName: z.string(),
})

/**
 * Schema for the entire API response.
 */
export const VehicleMakesResponseSchema = z.object({
	Count: z.number(),
	Message: z.string(),
	SearchCriteria: z.string(),
	Results: z.array(VehicleMakeSchema),
})

/**
 * TypeScript types inferred from the Zod schemas.
 */
export type VehicleMake = z.infer<typeof VehicleMakeSchema>
export type VehicleMakesResponse = z.infer<typeof VehicleMakesResponseSchema>
