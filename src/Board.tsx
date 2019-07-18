import { observer } from "mobx-react";
import { BoardViewModel } from "./BoardViewModel";
import React from "react";

@observer
export class Board extends React.Component<{ vm: BoardViewModel }> {
  render() {
    const { vm } = this.props;
    return (
      <>
        <div>Current player: {vm.currentPlayer}</div>
        <table>
          <tbody>
            <tr>
              <td onClick={() => vm.makeMove("c0_0")}>{vm.state.c0_0}</td>
              <td onClick={() => vm.makeMove("c0_1")}>{vm.state.c0_1}</td>
              <td onClick={() => vm.makeMove("c0_2")}>{vm.state.c0_2}</td>
            </tr>
            <tr>
              <td onClick={() => vm.makeMove("c1_0")}>{vm.state.c1_0}</td>
              <td onClick={() => vm.makeMove("c1_1")}>{vm.state.c1_1}</td>
              <td onClick={() => vm.makeMove("c1_2")}>{vm.state.c1_2}</td>
            </tr>
            <tr>
              <td onClick={() => vm.makeMove("c2_0")}>{vm.state.c2_0}</td>
              <td onClick={() => vm.makeMove("c2_1")}>{vm.state.c2_1}</td>
              <td onClick={() => vm.makeMove("c2_2")}>{vm.state.c2_2}</td>
            </tr>
          </tbody>
        </table>
        <div>Winner: {vm.winner || "no winner yet, keep going!"}</div>
      </>
    );
  }
}
