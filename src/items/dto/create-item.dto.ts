import { Color } from "../interfaces/color.interface";
import { PreviousOwner } from "../interfaces/previous-owner.interface";

export class CreateItemDto {
readonly name: string;
readonly description: string;
readonly qty: number;
readonly color: Color[];
readonly previousOwner: PreviousOwner[];
}