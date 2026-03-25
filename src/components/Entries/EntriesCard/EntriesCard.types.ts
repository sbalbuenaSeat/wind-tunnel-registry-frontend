import { type ReactNode } from 'react';

export interface EntriesCardProps {
  children: ReactNode;
  className?: string;
}

export interface EntriesCardHeaderProps {
  children: ReactNode;
}

export interface EntriesCardDateProps {
  date: string;
}

export interface EntriesCardTypeProps {
  type: string;
}

export interface EntriesCardContentProps {
  children: ReactNode;
}

export interface EntriesCardMinutesProps {
  minutes: number;
}

export interface EntriesCardNoteProps {
  note: string;
}
