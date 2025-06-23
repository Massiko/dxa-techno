'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'react-day-picker/dist/style.css'

export function Calendar(props: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays
      classNames={{
        caption: 'flex justify-between items-center px-2',
        // … vos autres overrides de classNames
      }}
      components={{
        // Remplace le bouton "mois précédent"
        PreviousMonthButton: ({ ...buttonProps }) => (
          <button
            {...buttonProps}
            aria-label="Mois précédent"
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        ),
        // Remplace le bouton "mois suivant"
        NextMonthButton: ({ ...buttonProps }) => (
          <button
            {...buttonProps}
            aria-label="Mois suivant"
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        ),
      }}
      {...props}
    />
  )
}
