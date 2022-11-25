export type TimePeriod = 'daily' | 'weekly' | 'monthly';

export interface Activity {
  title: string,
  currentTime: number,
  previousTime: number
}
