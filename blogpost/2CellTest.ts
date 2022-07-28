 
 it("cell will be alive after tick when has 3 neighbors", () => {
    const cell = new Cell(1, 3);
    expect(cell.setNextState()).toEqual(1);
  });