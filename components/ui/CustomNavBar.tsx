import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CustomNavbar({
  className,
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
}: {
  className?: string
  nextMonth?: Date
  previousMonth?: Date
  onPreviousClick: () => void
  onNextClick: () => void
}) {
  return (
    <div className={`flex items-center justify-between px-2 ${className}`}>
      <button title="Previous"
        type="button"
        onClick={onPreviousClick}
        disabled={!previousMonth}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button title ="Next"
        type="button"
        onClick={onNextClick}
        disabled={!nextMonth}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
