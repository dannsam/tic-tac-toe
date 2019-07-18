import { BoardViewModel } from "./BoardViewModel";

describe("GetWinner", () => {
  it("return O when 3 Os in the first row", () => {
    const vm = new BoardViewModel();
    vm.state.c0_0 = "o";
    vm.state.c0_1 = "o";
    vm.state.c0_2 = "o";

    const actual = vm.winner;
    expect(actual).toBe("o");
  });

  it("return x when 3 xs in the first row", () => {
    const vm = new BoardViewModel();
    vm.state.c0_0 = "x";
    vm.state.c0_1 = "x";
    vm.state.c0_2 = "x";

    const actual = vm.winner;
    expect(actual).toBe("x");
  });

  it("return undefined when the first row is partially filled", () => {
    const vm = new BoardViewModel();
    vm.state.c0_0 = "x";
    vm.state.c0_1 = "x";

    const actual = vm.winner;
    expect(actual).toBeUndefined();
  });

  it("return O when 3 Os in the third column", () => {
    const vm = new BoardViewModel();
    vm.state.c0_2 = "o";
    vm.state.c1_2 = "o";
    vm.state.c2_2 = "o";

    const actual = vm.winner;
    expect(actual).toBe("o");
  });

  it("return x when 3 xs in the diagonal", () => {
    const vm = new BoardViewModel();
    vm.state.c0_0 = "x";
    vm.state.c1_1 = "x";
    vm.state.c2_2 = "x";

    const actual = vm.winner;
    expect(actual).toBe("x");
  });
});
