import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Milton Amaya</span>
      </h5>

      <h3 className="bold">
        Interaction Designer, UI Developer, and Storyteller. I am constantly seeking for opportunities where I can make an impact through design. I share learnings on <a href="https://medium.com/@miltonisblurrd">Medium</a> and on my freetime work on <a href="https://ticketsurfapp.webflow.io/">TicketSurf</a>. Nice to meet you 👋
        </h3>

      <ExperienceSection />
      <ProjectsSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </div>
)

export default IndexPage
