interface Activity {
  title: string,
  currentTime: number,
  previousTime: number
}

type TimePeriod = 'daily' | 'weekly' | 'monthly';

export { Activity, TimePeriod };
