// Importing required libraries
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Helper function to merge and conditionally apply Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))  // Merging the classnames and handling conflicts
}
