import {
  type EntriesCardContentProps,
  type EntriesCardDateProps,
  type EntriesCardHeaderProps,
  type EntriesCardMinutesProps,
  type EntriesCardNoteProps,
  type EntriesCardProps,
  type EntriesCardTypeProps,
} from '@components/Entries/EntriesCard/EntriesCard.types.ts';
import { getClassNames } from '@services/utils/getClassNames.ts';
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
  const typeClasses = getClassNames({
    [styles.type]: true,
    [styles.individual]: type === 'INDIVIDUAL',
    [styles.shared]: type === 'SHARED',
  });
  return <span className={typeClasses}>{type}</span>;
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
  <p className={styles.note}>{note}</p>
);

EntriesCard.Header = Header;
EntriesCard.Date = EntryDate;
EntriesCard.Type = Type;
EntriesCard.Content = Content;
EntriesCard.Minutes = Minutes;
EntriesCard.Note = Note;
