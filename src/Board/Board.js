import React, {Component} from 'react';
import './Board.css';

class Board extends Component {
    state = {
        active: false
    };

    size = 10

    change = (target, x, y) => {
        target.bgColor = target.bgColor === '' ? 'red' : ''

        console.log(x,y)
    }

    render() {
        const table = []

        for (let i = 0; i < this.size; i++) {
            const rows = []
            const items = []
            for (let j = 0; j < this.size; j++) {

                items.push(
                <td onClick={e => this.change(e.currentTarget, j, i)} key={'item' + i * 3 + j}>{j},{i}</td>
                )
                
            }

            rows.push(<tr key={'row' + i}>{items}</tr>)
            table.push(rows)
            
        }
        
        return(
            <table>
                <tbody>
                {table}
                </tbody>
            </table>
        );
    }
}

export default Board;