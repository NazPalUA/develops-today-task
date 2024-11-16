import { Car } from "lucide-react"
import Link from "next/link"
import { Container } from "./Container"

export function Header() {
	return (
		<header className="sticky top-0 z-10 border-b bg-background/50 backdrop-blur-sm">
			<Container className="">
				<Link href="/" className="flex items-center space-x-2">
					<Car className="h-6 w-6" />
					<span className="text-lg font-semibold">Car Dealer App</span>
				</Link>
			</Container>
		</header>
	)
}
