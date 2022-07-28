 
 it.each([
    new Cell(1, 1),
    new Cell(1, 0),
    new Cell(0, 1),
    new Cell(0, 0)
 ])('cell will be dead after tick when has less than 2 neighbors"',
    cell => {
      expect(cell.setNextState()).toEqual(0);
    }
  );