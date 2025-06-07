import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
static defaultProps={
  nrows:5,
  ncols:5,
  chanceLightStartsOn:0.25
};
  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state={
      hasWon:false,
      board:this.createBoard()
    }
    this.flipCellsAround=this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let i=0;i<this.props.nrows;i++)
      {let row=[];
    for(let j=0;j<this.props.ncols;j++)
      {row.push(Math.random()<this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
        return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log("flipping",coord);
    let {ncols, nrows} = this.props;
    let curboard = this.state.board;
    let [y, x] = coord.split("-").map(Number);
let left=[y,x-1];
let right=[y,x+1];
let top=[y-1,x];
let bottom=[y+1,x];
  function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y <nrows) {
       curboard[y][x] = !curboard[y][x];
      }
    }
      flipCell(y,x);
flipCell(y,x-1);
 flipCell(y,x+1);
flipCell(y-1,x);
flipCell(y+1,x); 
      this.setState({
        board:curboard,
        hasWon:false
      })
    
let check=new Set();
this.state.board.forEach(rows=>{rows.forEach(el=>{check.add(el)})})
if(!check.has(true))
{
  this.setState(
    {
      hasWon:true
    }
  )
}
}
 

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

   // this.setState({board, hasWon});
  

genx()
{

  return   this.state.board.map((row,rowidx)=>(<tr>{row.map((col,colidx)=>(<Cell isLit={col} key={`${rowidx}-${colidx}`} flipCellsAroundMe={()=>this.flipCellsAround(`${rowidx}-${colidx}`)} />))}</tr>))

}

  /** Render game board or winning message. */

  render() {
if(this.state.hasWon)
{
  return(
    <div className="winner">
      <span className="neon-blue">You</span>
      <span className="neon-orange">Win!</span>
    </div>
  )
}
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board
    else
return(
  <div>
    <div className="Board-title">
      <div className="neon-blue">Lights</div>
      <div className="neon-orange">Out!</div>
    </div>
<table className="Board">
  <tbody>
{this.genx()}
  </tbody>
</table>
</div>
)
    // TODO
  }
}


export default Board;
