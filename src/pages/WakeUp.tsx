import React from 'react'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'

const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        You get up, begrudgingly, rubbing the sleep out of your eyes.
      </div>

      {/* TODO: */}

      <Options>
      </Options>
    </Page>
  )
}

export default {
  PageContent
}
