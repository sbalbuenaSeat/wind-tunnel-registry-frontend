export interface FlightDetailsResponse {
  totalMinutes: number;
  flightDetails: FlightDetailsByType[];
}

export interface MappedFlightDetailsResponse extends FlightDetailsResponse {
  minutesByType: Record<string, number>;
  cards: ReportsCard[];
}

export interface ReportsCard {
  label: string;
  description?: string;
  value: number;
  type: 'individual' | 'shared' | 'total';
  timeParts: { value: string; unit: string }[];
}

export type FlightDetailsByType = {
  type: string;
  minutes: number;
};
