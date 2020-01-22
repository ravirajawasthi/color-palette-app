import React from 'react'
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return <div style={{height: "100%"}}>{
        colors.map((colorObj, i) => (
            <DraggableColorBox key={colorObj.name} index={i} name={colorObj.name} removeColor={removeColor} color={colorObj.color} />
        ))
    }</div>
})

export default DraggableColorList;