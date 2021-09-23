import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export default (minutes: number): string => {
  let h, min;

  if (minutes >= 60) {
    h = 'H[h]';
  }

  if (minutes % 60 !== 0) {
    min = 'm[min]';
  }

  return dayjs.duration(minutes, 'minutes').format([h, min].filter((x) => x).join(' '));
};
