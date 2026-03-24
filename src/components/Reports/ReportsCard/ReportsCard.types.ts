export interface ReportsCardProps {
  label: string;
  description: string;
  value: number;
  type?: 'individual' | 'shared' | 'total';
  timeParts: { value: string; unit: string }[];
}
