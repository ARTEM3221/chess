import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell{
   readonly x: number;
   readonly x: number;
   readonly color: Colors;
   figure: Figure | null;
   board: Board;
   avaible: boolean;
   id: number;
}