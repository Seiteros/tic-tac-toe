import React, { useState } from 'react';
import './game.css';
import CellList from "./CellList"


function Game(props) {
    const initialSate = [
        {mark: "", id: 1},
        {mark: "", id: 2},
        {mark: "", id: 3},
        {mark: "", id: 4},
        {mark: "", id: 5},
        {mark: "", id: 6},
        {mark: "", id: 7},
        {mark: "", id: 8},
        {mark: "", id: 9},
    ]
    const [clickCount, setClickCount] = useState(0)
    const [mark, setMark] = useState('X')
    const [cells, setGame] = useState(initialSate)

    function checkWin(cellState, id, markCheck){
        let win = [ 
        [cellState[0], cellState[1], cellState[2]], //poziom 0
        [cellState[3], cellState[4], cellState[5]], // 1
        [cellState[6], cellState[7], cellState[8]], // 2
        [cellState[0], cellState[3], cellState[6]], // pion 3
        [cellState[1], cellState[4], cellState[7]], // 4
        [cellState[2], cellState[5], cellState[8]], // 5
        [cellState[0], cellState[4], cellState[8]], // przekatne 6
        [cellState[2], cellState[4], cellState[6]], // 7
        ]


        // eslint-disable-next-line default-case
        switch(id){
            case 1:
                return [ win[0], win[3], win[6] ].some(result => result.every(cell => cell.mark===markCheck))
            case 2:
                return [ win[0], win[4] ].some(result => result.every(cell => cell.mark===markCheck))
            case 3:
                return [ win[0], win[5], win[7] ].some(result => result.every(cell => cell.mark===markCheck))
            case 4:
                return [ win[1], win[3] ].some(result => result.every(cell => cell.mark===markCheck))
            case 5:
                return [ win[1], win[4], win[6], win[7] ].some(result => result.every(cell => cell.mark===markCheck))
            case 6:
                return [ win[1], win[5] ].some(result => result.every(cell => cell.mark===markCheck))
            case 7:
                return [ win[2], win[3], win[7] ].some(result => result.every(cell => cell.mark===markCheck))
            case 8:
                return [ win[2], win[4] ].some(result => result.every(cell => cell.mark===markCheck))
            case 9:
                return [ win[2], win[5], win[6] ].some(result => result.every(cell => cell.mark===markCheck))
        }
    }

    function handelClick(id){
        let cells2 = [...cells]
        let cell2 = {...cells2[id-1]}

        if(cell2.mark ===''){
            cell2.mark = mark
            cells2[id-1] = cell2
            setGame(cells2)
            setClickCount(clickCount+1)
            mark==='X'? setMark('O') : setMark('X')
            // console.log(cells)
        }
        if(checkWin(cells2, id, mark)){
            mark==='X'? props.setXScore(props.xScore+1) : props.setOScore(props.oScore+1)
            setTimeout(function(){
                 alert(`Wygrał: ${mark}`);
                 setGame(initialSate)
                 setClickCount(0)
            }, 100);
        }
        else if(clickCount >= 9){
            alert('Remis');
            setClickCount(0)
            setGame(initialSate)
        }
    }

    return (
        <div className='game'>
            <CellList cells={cells} handelClick={handelClick}/>
        </div>
    )
}

export default Game
