import { workDetail } from '../constants';

export function sortCompanies(companies: workDetail[]): workDetail[] {
  return companies.sort((a, b) => {
    const { duration: durationA } = a; // 'Aug 03, 2021 - Oct 27, 2021'
    const { duration: durationB } = b;

    const startDateA = durationA.split('-')[0].trim(); // Aug 03, 2021
    const startDateB = durationB.split('-')[0].trim();

    return new Date(startDateB).getTime() - new Date(startDateA).getTime();
  });
}

export function match(string: string, regex: RegExp): boolean {
  return regex.test(string);
}
