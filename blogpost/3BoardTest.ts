 
it.each([
    {
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
    },
    {
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
    },
    {
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
    },
   ])("returns proper board after tick", boards => {
    expect(new Board(boards.before).tick()).toEqual(boards.after);
   });
   