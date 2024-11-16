import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonNavigator() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
      {/* Skeleton for Vehicle Make Selector */}
      <div className="flex flex-col space-y-2 w-full md:w-auto">
        {/* Skeleton for Label */}
        <Skeleton className="h-4 w-24" />

        {/* Skeleton for Select */}
        <Skeleton className="h-10 w-full md:min-w-[200px]" />
      </div>

      {/* Skeleton for Model Year Selector */}
      <div className="flex flex-col space-y-2 w-full md:w-auto">
        {/* Skeleton for Label */}
        <Skeleton className="h-4 w-24" />

        {/* Skeleton for Select */}
        <Skeleton className="h-10 w-full md:min-w-[150px]" />
      </div>
    </div>
  )
}
