import './codingProjectStack.css';
import StackPiece from '../StackPiece/StackPiece';

const CodingProjectStack = (props) => {
    return (
        <div className='coding_project_stack_container'>
            {props.children}
        </div>
    )
};

export default CodingProjectStack;