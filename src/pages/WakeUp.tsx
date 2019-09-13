import React from 'react'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'
import { globalStyles } from '../constants/styles'

import sleepingRoommate from '../images/sleepingRoommate.jpg'
import capriceTanktop from '../images/capriceTanktop.jpg'

const PageContent: IPageComponent = (props) => {
  const hour = props.state.timeOfDay.getHours()
  const roommateIsAsleep = hour == 6 // Roommate wakes up at 7

  return (
    <Page>
      <div>
        You get up, begrudgingly, rubbing the sleep out of your eyes.
      </div>

      <br />

      {roommateIsAsleep &&
        <div>
          <p>
            Your roommate, Allison, is still in her bed on the other side of the dorm room
            you two share. You see her roll over and go back to sleep, barely noticing your
            alarm.
          </p>

          <br />

          <img src={sleepingRoommate} style={globalStyles.image} />
        </div>
      }

      <Options>
        <p>What do you do?</p>

        <Option
          onClick={() => {
            // props.navigateToPage(SnoozeAlarm)
          }}
        >
          <div>Check your phone</div>
        </Option>

        <Option
          onClick={() => {
            // props.navigateToPage(SnoozeAlarm)
          }}
        >
          <div>Go take a shower</div>
        </Option>


      </Options>
    </Page>
  )
}

export default {
  PageContent
}
