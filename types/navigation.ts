// types/navigation.ts
import { LucideIcon } from 'lucide-react'

export type SubItem = {
  name: string
  href: string
  icon?: LucideIcon
}

export type NavItem = {
  name: string
  href: string
  icon: LucideIcon
  badge?: string
  submenu?: SubItem[]
}



