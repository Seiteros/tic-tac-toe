import React from 'react';
import classNames from 'classnames';

function CellList({cells, handelClick}) {
    return (
        <div className='all-cells'>
            {cells.map((cell) => (
                <button key={cell.id} className={classNames({
                    cell: true,
                    X: cell.mark==='X'? true : false,
                    O: cell.mark==='O'? true : false,
                })} href="#" onClick={() => handelClick(cell.id)}> {cell.mark} </button>
            ))}
        </div>   
    )
}

export default CellList
