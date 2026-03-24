export interface ReportsCardProps {
  label: string;
  value: number;
  type?: 'individual' | 'shared' | 'total';
  timeParts: { value: string; unit: string }[];
}
