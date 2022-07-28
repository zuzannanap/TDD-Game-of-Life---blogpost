import { it } from "@jest/globals";
 
describe("returns proper board after tick", () => {
 it.failing("sample board 1", () => {
   const board = {
     before: [
       [1, 0, 0],
       [0, 1, 0],
       [0, 0, 1],
     ],
     after: [
       [0, 0, 0],
       [0, 1, 0],
       [0, 0, 0],
     ],
   };
   expect(new Board(board.before).tick()).toEqual(board.after);
 });
 it.failing("sample board 2", () => {
   const board = {
     before: [
       [1, 0, 1],
       [0, 1, 0],
       [1, 0, 1],
     ],
     after: [
       [0, 1, 0],
       [1, 0, 1],
       [0, 1, 0],
     ],
   };
   expect(new Board(board.before).tick()).toEqual(board.after);
 });
 it.failing("sample board 3", () => {
   const board = {
     before: [
       [1, 0, 1],
       [1, 0, 1],
       [1, 1, 0],
     ],
     after: [
       [0, 0, 0],
       [1, 0, 1],
       [1, 1, 0],
     ],
   };
   expect(new Board(board.before).tick()).toEqual(board.after);
 });
});
