import React from 'react'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'

import SnoozeAlarm from './SnoozeAlarm'
import WakeUp from './WakeUp'


const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        Beep, Beep, Beep...
      </div>

      <Options>
        <Option onClick={() => props.navigateToPage(SnoozeAlarm)}>
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
