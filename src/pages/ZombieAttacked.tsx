import React from 'react'

import { Page } from '../components/Page'
// import { Options } from '../components/Options'
// import { Option } from '../components/Option'
import { IPageComponent } from '../types'

const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        Hyyyaaaaahhh!!!!!
      </div>
    </Page>
  )
}

const id = "Zombie Attacked"

export default {
  PageContent,
  id
}
