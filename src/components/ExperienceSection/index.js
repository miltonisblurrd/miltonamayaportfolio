import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import RSLlogo from '../../assets/images/experience/RakutenSuperLogistics.jpeg'
import blindpartsLogo from '../../assets/images/experience/blindpartsLogo.jpg'
import blurrdStudioLogo from '../../assets/images/experience/blurrdStudioLogo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={RSLlogo}
            colour='#bf0000'
            title='Rakuten Super Logistics'
            link='https://www.Rakutensl.com/'
            timeperiod='UX Designer | Feb 2019 - Present'
            subtitle='Since 2001, Rakuten Super Logistics (RSL) has grown to become one of the nation’s leading eCommerce order fulfillment companies.'
          />
          <ExperienceUnit
            logo={blindpartsLogo}
            colour='#FFFFFF'
            title='Blinds USA'
            link='https://www.blindparts.com/'
            timeperiod='Web Designer | Jan 2018 - Jan 2019'
            subtitle='A marketplace for blindparts. I helped scale company - growing their Traffic, Revenue, and Loyal Customers.'
          />
          <ExperienceUnit
            logo={blurrdStudioLogo}
            colour='#333333'
            title='Blurrd Studio'
            link='https://www.blurrdstudio.com/'
            timeperiod='UI Developer | March 2017 - Present'
            subtitle='Creative agency based in Las Vegas that changes the way users interact with your website and product. Helping businesses big and small, and for the past 2 years our creative strategies helped B2B & B2C businesses increase their Traffic, Conversion rates, and Revenue.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
