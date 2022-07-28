 
const boardOfDeads: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  it("returns empty board when all given cells are dead", () => {
    const board = new Board(boardOfDeads);
    expect(board.tick()).toEqual(boardOfDeads);
  });