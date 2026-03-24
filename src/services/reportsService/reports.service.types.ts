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
  value: number;
  type: 'individual' | 'shared' | 'total';
  timeParts: { num: string; unit: string }[];
}

export type FlightDetailsByType = {
  type: string;
  minutes: number;
};
