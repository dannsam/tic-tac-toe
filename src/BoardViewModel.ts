import { observable, computed } from "mobx";

export class BoardViewModel {
  @observable
  state = new BoardState();

  @observable
  currentPlayer: "x" | "o" = "x";

  @computed
  get winner(): "x" | "o" | undefined {
    if (this.allTheThings.some(r => r.every(x => x === "x"))) {
      return "x";
    } else if (this.allTheThings.some(r => r.every(x => x === "o"))) {
      return "o";
    }
  }

  @computed
  get rows(): RowsOrColumns {
    return [
      [this.state.c0_0, this.state.c0_1, this.state.c0_2],
      [this.state.c1_0, this.state.c1_1, this.state.c1_2],
      [this.state.c2_0, this.state.c2_1, this.state.c2_2]
    ];
  }

  @computed
  get columns(): RowsOrColumns {
    return [
      [this.state.c0_0, this.state.c1_0, this.state.c2_0],
      [this.state.c0_1, this.state.c1_1, this.state.c2_1],
      [this.state.c0_2, this.state.c1_2, this.state.c2_2]
    ];
  }

  @computed
  get digonals(): [RowOrColumn, RowOrColumn] {
    return [
      [this.state.c0_0, this.state.c1_1, this.state.c2_2],
      [this.state.c0_2, this.state.c1_1, this.state.c2_0]
    ];
  }

  @computed
  get allTheThings(): RowOrColumn[] {
    return [...this.rows, ...this.columns, ...this.digonals];
  }

  makeMove(cell: keyof BoardState): void {
    if (this.winner) {
      this.state = new BoardState();
      return;
    }

    if (this.state[cell] === undefined) {
      this.state[cell] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
  }
}

export type Value = "x" | "o" | undefined;

export type RowOrColumn = [Value, Value, Value];

export type RowsOrColumns = [RowOrColumn, RowOrColumn, RowOrColumn];

export class BoardState {
  @observable
  c0_0: "x" | "o" | undefined;
  @observable
  c0_1: "x" | "o" | undefined;
  @observable
  c0_2: "x" | "o" | undefined;

  @observable
  c1_0: "x" | "o" | undefined;
  @observable
  c1_1: "x" | "o" | undefined;
  @observable
  c1_2: "x" | "o" | undefined;

  @observable
  c2_0: "x" | "o" | undefined;
  @observable
  c2_1: "x" | "o" | undefined;
  @observable
  c2_2: "x" | "o" | undefined;
}
