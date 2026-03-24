export type ClassMap = Record<string, boolean | null | undefined>;

export const getClassNames = (classMap: ClassMap): string =>
  Object.entries(classMap)
    .filter(([_, isActive]) => Boolean(isActive))
    .map(([className]) => className)
    .join(' ');
