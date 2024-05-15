import './resumesection.css';

const ResumeSection = (props) => {
    let isBuild=props.isBuild;

    if (!isBuild) {
        return (
            <div className='resume_section_container'>
                <div className='resume_headline_content'>
                    {props.headline}
                    {props.children}
                </div>
                <div className='resume_summary_content'>
                    {props.summary}
                </div>      
            </div>
        )
    } else {
        return (
            <div className='resume_section_container'>
                <div className='resume_headline_content'>
                    {props.headline}
                    <a className= 'pc_build_image_container' href="https://ibb.co/vVdWvmk"  target='_blank'>
                        <img className='pc_build_image' src="https://i.ibb.co/Bc6JKjB/pc-build.jpg" alt="PC Build" />
                    </a>
                </div>
                <div className='resume_summary_content'>
                    {props.summary}
                </div>  
            </div>
        )
    }
};

export default ResumeSection;

    // let test = props.isBuild;

    // if (!test) {
    //     return (
    //         <div className='resume_section_container'>
    //             <h3 className='resume_section_title'>
    //                 {props.title}
    //                 {props.children}
    //             </h3>
    //             <p className='indentation'>
    //                 {props.content}
    //             </p>  
    //         </div>
    //     )
    // }  else {
    //     return (
    //         <div className='resume_section_container'>
    //             <h3 className='pc_build_title'>
    //                 {props.title}
    //                 {props.children}
    //             </h3>
    //             <a href="https://ibb.co/vVdWvmk">
    //                 <img className='pc_build_image' src="https://i.ibb.co/Bc6JKjB/pc-build.jpg" alt="PC Build"/>
    //             </a>
    //             <ul className='pc_build_list'>
    //                 <li>CPU: Ryzen 7800X3D</li>
    //                 <li>Case: Lian Li Lancool 216</li>
    //                 <li>Motherboard: Gigabyte B650 Gmaing X AX V2 </li>
    //                 <li>Power Supply: Montech Titan Gold 1000W</li>
    //                 <li>CPU Cooler: Thermalright Peerless Assassin SE</li>
    //                 <li>RAM: 2x 16GB G Skill Flare X5 DDR5-6000 CL36</li>
    //                 <li>Storage: SK Hynix P41 Platinum 1 TB M.2-2280 NVME drive</li>
    //                 <li>GPU: Powercolor Hellhound RX 7900 XT</li>
    //             </ul>
    //         </div>
    //     )
    // }