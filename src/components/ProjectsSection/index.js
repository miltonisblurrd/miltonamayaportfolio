import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import blindpartsLogo from '../../assets/images/experience/blindpartsLogo.jpg'
import RSLlogo from '../../assets/images/experience/RakutenSuperLogistics.jpeg'
import audioMack from '../../assets/images/experience/audioMack.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={RSLlogo}
            colour="#BF0000"
            title="Rakuten Super Logistics"
            link="https://medium.com/@miltonisblurrd/rakuten-super-logistics-case-study-88ec2149c3d"
            timeperiod="2019 | Case Study"
            subtitle="I was assigned to redesign RSL’s new website. But before I would start I sat down and figured out what the websites goals are to say we succeeded with the ReDesign. Check out my case study. "
          />
          <ExperienceUnit
            logo={audioMack}
            colour="#000000"
            title="AudioMack"
            link="https://medium.com/@miltonisblurrd/audiomack-redesign-case-study-8ca6e050c12a"
            timeperiod="2019 | Case Study"
            subtitle="I chose to redesign this project simply due to my daily use of the app. The more I kept using the app — the more I wanted to make it better. This was an opportunity to really dig my teeth into UX research and design, an excuse to show my skills with my favorite tools Figma & Framer X."
          />
          <ExperienceUnit
            logo={blindpartsLogo}
            colour="#FFFFFF"
            title="Blind Parts"
            link="https://medium.com/@miltonisblurrd/blinds-usa-case-study-c8f1f53f16be"
            timeperiod="2018 | Case Study"
            subtitle="My role in this position was to Enhance Traffic, Sales, and Loyal Customers for a Medium-large eCommerce site called Blindparts.com. The founder wanted to create a marketplace for blind parts — instead of blending his Whole distribution site with individual purchasing."
          />

        </div>
      </Section>
    )
  }
}

export default ProjectsSection
