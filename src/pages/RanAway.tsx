import React from 'react'

import { Page } from '../components/Page'
// import { Options } from '../components/Options'
// import { Option } from '../components/Option'
import { IPageComponent } from '../types'

const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        Omg, zombie!!!! Run awaaaayyy!!!
      </div>
    </Page>
  )
}

export default {
  PageContent
}
