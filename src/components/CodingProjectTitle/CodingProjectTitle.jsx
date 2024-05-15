import './codingProjectTitle.css';

const CodingProjectTitle = (props) => {
    return (
        <div className='coding_project_title'>
            <div>{props.projectTitle}</div>
            <div className='coding_project_hyperlink_container'>
                <a className='coding_project_hyperlink_frontend' href={props.frontendHyperlink} target='_blank'>Frontend</a>
                <a className='coding_project_hyperlink_backend' href={props.backendHyperlink} target='_blank'>Backend</a>
            </div>    
        </div>
    )
};

export default CodingProjectTitle;