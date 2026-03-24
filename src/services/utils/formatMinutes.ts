/**
 * Formats minutes into a human-readable string like "1h 30m" or just "45m".
 * If minutes are 0, it returns "0m".
 */
export const formatMinutes = (totalMinutes: number): string => {
  if (totalMinutes === 0) return '0m';
  if (totalMinutes < 60) return `${totalMinutes}m`;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
};
