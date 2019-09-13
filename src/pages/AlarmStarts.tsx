import React from 'react'
import { format } from 'date-fns'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'

import SnoozeAlarm from './SnoozeAlarm'
import WakeUp from './WakeUp'

import sixAm from '../images/6am.gif'

const PageContent: IPageComponent = (props) => {
  const timeString = format(props.state.timeOfDay, "h:mm a")
  const timeIsSixAm = timeString == "6:00 AM"

  const ClockGif = () => timeIsSixAm ? <img src={sixAm} /> : <></>

  return (
    <Page>
      <div>
        Beep, Beep, Beep...
      </div>

      <br />

      <ClockGif />

      <br />

      <div>
        You hear your alarm clock going off. It reads {timeString}
      </div>

      <Options>
        <p>What do you do?</p>
        <Option onClick={() => {
          props.dispatch({
            type: 'incrementTime',
            payload: {
              incrementMinutes: 10
            }
          })
          props.navigateToPage(SnoozeAlarm)
        }}
        >
          <div>Snooze</div>
        </Option>

        <Option onClick={() => props.navigateToPage(WakeUp)}>
          <div>Wake up</div>
        </Option>
      </Options>
    </Page>
  )
}

export default {
  PageContent
}
