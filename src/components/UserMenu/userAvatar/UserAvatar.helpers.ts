export const getInitials = (name?: string | null) => {
  if (!name) return 'U';

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
};
