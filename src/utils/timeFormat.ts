import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export default (minutes: number, hourSuffix: string = 'h', minSuffix: string = 'min'): string => {
  let h, min;

  if (minutes >= 60) {
    h = `H[${hourSuffix}]`;
  }

  if (minutes % 60 !== 0) {
    min = `m[${minSuffix}]`;
  }

  return dayjs.duration(minutes, 'minutes').format([h, min].filter((x) => x).join(' '));
};
