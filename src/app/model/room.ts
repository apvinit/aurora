export interface Room {
  name: string;
  type: 'single' | 'double' | 'triple';
  fees: number;
  isAlloted: boolean;
  allotedTo: string[];
}
