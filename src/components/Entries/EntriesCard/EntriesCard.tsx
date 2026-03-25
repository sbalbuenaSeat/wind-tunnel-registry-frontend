import { Badge, Flex, IconButton } from '@chakra-ui/react';
import {
  type EntriesCardContentProps,
  type EntriesCardDateProps,
  type EntriesCardFooterProps,
  type EntriesCardHeaderProps,
  type EntriesCardMinutesProps,
  type EntriesCardNoteProps,
  type EntriesCardProps,
  type EntriesCardTypeProps,
} from '@components/Entries/EntriesCard/EntriesCard.types.ts';
import { getClassNames } from '@services/utils/getClassNames.ts';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import styles from './EntriesCard.module.css';

export const EntriesCard = ({ children, className }: EntriesCardProps) => {
  return (
    <div
      className={getClassNames({
        [styles.entriesCard]: true,
        [className ?? '']: !!className,
      })}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: EntriesCardHeaderProps) => (
  <div className={styles.header}>{children}</div>
);

const EntryDate = ({ date }: EntriesCardDateProps) => (
  <span className={styles.date}>{date}</span>
);

const Type = ({ type }: EntriesCardTypeProps) => {
  const colorPalette = type === 'INDIVIDUAL' ? 'blue' : 'purple';

  return (
    <Badge
      colorPalette={colorPalette}
      variant="subtle"
      aria-label={`Session type: ${type}`}
    >
      {type}
    </Badge>
  );
};

const Content = ({ children }: EntriesCardContentProps) => (
  <div className={styles.content}>{children}</div>
);

const Minutes = ({ minutes }: EntriesCardMinutesProps) => (
  <div className={styles.minutesContainer}>
    <span className={styles.minutesValue}>{minutes}</span>
    <span className={styles.minutesUnit}>min</span>
  </div>
);

const Note = ({ note }: EntriesCardNoteProps) => (
  <p className={styles.note} aria-hidden={!note}>
    {note}
  </p>
);

const Footer = ({ onEdit, onDelete, date }: EntriesCardFooterProps) => (
  <Flex justify="flex-end" gap="3" mt="auto">
    <IconButton
      variant="ghost"
      colorPalette="blue"
      onClick={onEdit}
      aria-label={`Edit entry from ${date}`}
      size="sm"
    >
      <HiOutlinePencil />
    </IconButton>
    <IconButton
      variant="ghost"
      colorPalette="red"
      onClick={onDelete}
      aria-label={`Delete entry from ${date}`}
      size="sm"
    >
      <HiOutlineTrash />
    </IconButton>
  </Flex>
);

EntriesCard.Header = Header;
EntriesCard.Date = EntryDate;
EntriesCard.Type = Type;
EntriesCard.Content = Content;
EntriesCard.Minutes = Minutes;
EntriesCard.Note = Note;
EntriesCard.Footer = Footer;
