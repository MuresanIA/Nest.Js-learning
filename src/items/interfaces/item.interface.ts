import { Color } from './color.interface';
import { PreviousOwner } from './previous-owner.interface';
export interface Item {
  id?: string;
  name: string;
  description?: string;
  qty: number;
  color: Color[];
  previousOwner: PreviousOwner[];
}
