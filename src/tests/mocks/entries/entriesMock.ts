import type { EntriesResponse } from '@services/entriesService/entries.service.types';

export const ENTRIES_MOCK: EntriesResponse = [
  {
    id: '69ae9c09cf10b8ae3ceed4ae',
    type: 'SHARED',
    date: '2026-03-10',
    minutes: 15,
    note: 'Session 2',
  },
  {
    id: '69ae9c09cf10b8ae3ceed4ad',
    type: 'INDIVIDUAL',
    date: '2026-03-09',
    minutes: 20,
    note: 'Session 1',
  },
  {
    id: '69ae9b21cf10b8ae3ceed4a0',
    type: 'INDIVIDUAL',
    date: '2026-03-09',
    minutes: 25,
    note: 'entreno de outface',
  },
  {
    id: '69a9642e7937a6510ecb803b',
    type: 'SHARED',
    date: '2024-03-05',
    minutes: 30,
    note: 'el usuario 1',
  },
  {
    id: '69a964907937a6510ecb8051',
    type: 'INDIVIDUAL',
    date: '2024-03-04',
    minutes: 15,
    note: 'sit',
  },
  {
    id: '69a964657937a6510ecb8048',
    type: 'SHARED',
    date: '2024-03-04',
    minutes: 5,
    note: 'Entrenamiento intenso, duró más de lo previsto',
  },
];
