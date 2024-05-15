import './components/resume.css';
import ResumeNavbar from './components/ResumeNavbar/ResumeNavbar';
import ResumeSection from './components/ResumeSection/ResumeSection';
import CodingProjectTitle from './components/CodingProjectTitle/CodingProjectTitle';
import CodingProjectStack from './components/CodingProjectStack/CodingProjectStack';
import StackPiece from './components/StackPiece/StackPiece';
import PCBuildTitle from './components/PCBuildTitle/PCBuildTitle';
import PCBuildList from './components/PCBuildList/PCBuildList';
import CodingProjectSummary from './components/CodingProjectSummary/CodingProjectSummary';

const App = () => {
  return (
    <>
      <div className='resume_container'>
        <ResumeNavbar/>
        <div className='resume_sections_container'>
          <ResumeSection isBuild = {true} title={'PC Build'} headline={<PCBuildTitle/>} summary={<PCBuildList/>}>
          </ResumeSection>  
          <ResumeSection isBuild = {false} headline={<CodingProjectTitle projectTitle={'Nosea'} frontendHyperlink={'https://github.com/davilasergio1995/nosea-frontend'} backendHyperlink={'https://github.com/davilasergio1995/nosea-backend'}/>} summary={<CodingProjectSummary summary={`First serious JavaScript/React project, an extremely basic chat app. Introduced me to the basics of React and the interactions between the frontend and backend of a project, while strengthening my skills in various JavaScript concepts such as developing an API, fetch requests, and UX/UI design.
`}/>}>
            <CodingProjectStack>
              <StackPiece imageSource={'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'} imageAlt={'Express'}/>
              <StackPiece imageSource={'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'} imageAlt={'React'}/>
              <StackPiece imageSource={'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'} imageAlt={'Node.JS'}/>
            </CodingProjectStack>
          </ResumeSection>
          <ResumeSection isBuild = {false} headline={<CodingProjectTitle projectTitle={'Apollo'} frontendHyperlink={'https://github.com/davilasergio1995/apollo_frontend'} backendHyperlink={'https://github.com/davilasergio1995/nosea-frontend'}/>} summary={<CodingProjectSummary summary={`ILS/library software solution. Full stack JavaScript project that utilized the MERN stack (MongoDB, Express, React, Node.JS). While unfinished, Apollo allowed me to utilize a dedicated database and further develop on the skills learned during Nosea's development. Solidified my basic React skills and furthered my research on more complex full stack skills (server/database maintenance, balancing API fetch requests and server loads, managing libraries, etc.) `}/>}>
          <CodingProjectStack>
              <StackPiece imageSource={'https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png'} imageAlt={'MongoDB'}/>
              <StackPiece imageSource={'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'} imageAlt={'Express'}/>
              <StackPiece imageSource={'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'} imageAlt={'React'}/>
              <StackPiece imageSource={'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'} imageAlt={'Node.JS'}/>
            </CodingProjectStack> 
          </ResumeSection>
        </div>  
      </div>      
    </>
  )
}

export default App
