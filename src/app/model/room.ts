export interface Room {
  name: string;
  type: 'single' | 'double' | 'triple';
  fees: number;
  isAllocated: boolean;
  allotedTo: string[];
}
