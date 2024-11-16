import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getModalYears(startYear: number) {
	const currentYear = new Date().getFullYear()
	const years = Array.from(
		{ length: currentYear - startYear },
		(_, i) => currentYear - i
	)

	return years
}
