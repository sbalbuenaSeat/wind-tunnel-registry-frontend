import React from 'react';
import { Badge, Flex, Icon, IconButton } from '@chakra-ui/react';
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
import { getTimeParts } from '@services/reportsService/utils/reports.utils.ts';
import { getClassNames } from '@services/utils/getClassNames.ts';
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUser,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { LuClock } from 'react-icons/lu';
import styles from './EntriesCard.module.css';

export const EntriesCard = ({ children, className }: EntriesCardProps) => {
  const entriesContainerClasses = getClassNames({
    [styles.entriesCard]: true,
    [className ?? '']: !!className,
  });
  return <div className={entriesContainerClasses}>{children}</div>;
};

const Header = ({ children }: EntriesCardHeaderProps) => (
  <div className={styles.header}>{children}</div>
);

const EntryDate = ({ date }: EntriesCardDateProps) => (
  <span className={styles.date}>{date}</span>
);

const TYPE_CONFIG: Record<
  string,
  { colorPalette: string; icon: typeof HiOutlineUser; label: string }
> = {
  INDIVIDUAL: { colorPalette: 'blue', icon: HiOutlineUser, label: '1-on-1' },
  DEFAULT: { colorPalette: 'purple', icon: HiOutlineUsers, label: 'group' },
};

const Type = ({ type }: EntriesCardTypeProps) => {
  const config = TYPE_CONFIG[type] ?? TYPE_CONFIG.DEFAULT;

  return (
    <Badge
      colorPalette={config.colorPalette}
      variant="subtle"
      _dark={{
        bg: `${config.colorPalette}.950`,
        color: `${config.colorPalette}.200`,
        borderColor: `${config.colorPalette}.800`,
        borderWidth: '1px',
      }}
      aria-label={`Session type: ${config.label}`}
      display="flex"
      alignItems="center"
      gap="1"
      px="2"
    >
      <Icon as={config.icon} />
      {config.label}
    </Badge>
  );
};

const Content = ({ children }: EntriesCardContentProps) => (
  <div className={styles.content}>{children}</div>
);

const Minutes = ({ minutes }: EntriesCardMinutesProps) => {
  const timeParts = getTimeParts(minutes);
  return (
    <div className={styles.minutesContainer}>
      <div className={styles.timeWrapper}>
        <Icon
          as={LuClock}
          boxSize="16px"
          color="gray.500"
          _dark={{ color: 'gray.400' }}
        />
        <div className={styles.timeValues}>
          {timeParts.map((part) => (
            <React.Fragment key={`${part.value}-${part.unit}`}>
              <span className={styles.minutesValue}>{part.value}</span>
              <span className={styles.minutesUnit}>{part.unit}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Note = ({ note }: EntriesCardNoteProps) => {
  if (!note) return null;
  return <p className={styles.note}>{note}</p>;
};

const Footer = ({ onEdit, onDelete, date }: EntriesCardFooterProps) => (
  <Flex justify="space-between" align="center" gap="3" mt="auto">
    <span className={styles.date}>{date}</span>
    <Flex gap="1">
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
  </Flex>
);

EntriesCard.Header = Header;
EntriesCard.Date = EntryDate;
EntriesCard.Type = Type;
EntriesCard.Content = Content;
EntriesCard.Minutes = Minutes;
EntriesCard.Note = Note;
EntriesCard.Footer = Footer;
