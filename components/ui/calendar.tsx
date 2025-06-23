// src/components/ui/calendar.tsx
'use client'

import * as React from 'react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'
import styles from './calendar.module.css'
import 'react-day-picker/dist/style.css'

/**
 * Composant Calendar stylisé via CSS Modules
 * - Utilise navLayout pour positionner le nav autour du titre (v9+)
 * - Expose les props DayPickerProps pour la sélection (mode, onSelect, etc.)
 */
export function Calendar(props: DayPickerProps) {
  return (
    <div className={styles.container}>
      <DayPicker
        {...props}
        // Affiche les jours en dehors du mois
        showOutsideDays
        // Force 6 semaines pour chaque mois
        fixedWeeks
        // Navigation autour du titre (WCAG friendly)
        //navLayout="around"
        // Nombre de mois affichés
        numberOfMonths={1}
        // Styles globaux par CSS Module
        className={styles.dayPicker}
        // Override des classes internes
        classNames={{
          months: styles.months,
          month: styles.month,
          caption: styles.caption,
          caption_label: styles.captionLabel,
          head_row: styles.headRow,
          head_cell: styles.headCell,
          row: styles.row,
          cell: styles.cell,
          day: styles.day,
          day_selected: styles.daySelected,
          day_today: styles.dayToday,
          day_outside: styles.dayOutside,
          day_disabled: styles.dayDisabled,
        }}
      />
    </div>
  )
}
