import {useState} from 'react';
import './pcBuildList.css';

const PCBuildList = () => {
    const [pcParts,setPCParts] = useState([`CPU: Ryzen 7800X3D`,`Case: Lian Li Lancool 216`,
    `Motherboard: Gigabyte B650 Gmaing X AX V2`,
    `Power Supply: Montech Titan Gold 1000W`,
    `CPU Cooler: Thermalright Peerless Assassin SE`,
    `RAM: 2x 16GB G Skill Flare X5 DDR5-6000 CL36`,
    `Storage: SK Hynix P41 Platinum 1 TB M.2-2280 NVME drive`,
    `GPU: Powercolor Hellhound RX 7900 XT`]);

    const pcPartsMap = pcParts.map(e => <li className='pc_build_list_bullet'>{e}</li>);

    return (
        <ul className='pc_build_list'>
            {pcPartsMap}
        </ul>
    );
};
export default PCBuildList