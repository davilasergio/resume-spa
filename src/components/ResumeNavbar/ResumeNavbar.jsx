import './resumeNavbar.css';

const ResumeNavbar = () => {
    return (
        <div className='resume_navbar_container'>
            <p className='navbar_title'>Sergio Davila</p>
            <p>PC Build/Projects</p>
            <div className='navbar_hyperlink_container'>
                <a className='navbar_hyperlink' href='https://github.com/davilasergio/' target='_blank'>Github</a>
                <a className='navbar_hyperlink' href='https://docs.google.com/document/d/1l5_pfs336XpdTdFzg4bEKER8rTq6d2dv/edit' target='_blank'>Resume</a>
            </div>
        </div>
    )
};

export default ResumeNavbar;