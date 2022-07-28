 
it("alive cell will be alive after tick when has 2 neighbors", () => {
    const cell = new Cell(1, 2);
    expect(cell.setNextState()).toEqual(1);
  });