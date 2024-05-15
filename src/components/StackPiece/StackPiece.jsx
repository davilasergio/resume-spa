import './stackPiece.css';
import {useState} from 'react';

const StackPiece = (props) => {
    const [isHovered,setIsHovered] = useState(false);

    let hover = () => isHovered ? setIsHovered(false) : setIsHovered(true); 

    if (!isHovered) {
        return (
            <div onMouseEnter = {hover} onMouseLeave = {hover} className='stack_piece_neutral'>
                <img className='stack_piece_image' alt={props.imageAlt} src={props.imageSource}></img>
            </div>
        )
    } else {
        return (
        <>
            <div onMouseEnter = {hover} onMouseLeave = {hover} className='stack_piece_hovered'>
                <img className='stack_piece_image' alt={props.imageAlt} src={props.imageSource}></img>
                <div className='stack_piece_title'>{props.imageAlt}</div>
            </div>
        </>
        )
    }
};

export default StackPiece;