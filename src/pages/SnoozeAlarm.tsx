import React from 'react'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'
import AlarmStarts from './AlarmStarts'

const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        You smack the snooze button on your alarm clock and fall back asleep for another few minutes.... 💤
      </div>

      <Options>
        <Option onClick={() => props.navigateToPage(AlarmStarts) }>
          <div>Continue</div>
        </Option>
      </Options>
    </Page>
  )
}

export default {
  PageContent
}
