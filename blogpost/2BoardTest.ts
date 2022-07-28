 
it("returns empty board when 1 alive cell without neighbors is given", () => {
    const boardWithOneAlive: number[][] = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const board = new Board(boardWithOneAlive);
    expect(board.tick()).toEqual(boardOfDeads);
  }
);
