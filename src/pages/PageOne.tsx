import React from 'react'

import { Page } from '../components/Page'
import { Options } from '../components/Options'
import { Option } from '../components/Option'
import { IPageComponent } from '../types'
import ZombieAttacked from './ZombieAttacked'
import RanAway from './RanAway'

const PageContent: IPageComponent = (props) => {
  return (
    <Page>
      <div>
        There's a Zombie approaching you. What do you do?
      </div>

      <Options>
        <Option onClick={() => props.navigateToPage(ZombieAttacked)}>
          <div>Attack it!</div>
        </Option>

        <Option onClick={() => props.navigateToPage(RanAway)}>
          <div>Run away!</div>
        </Option>
      </Options>
    </Page>
  )
}

export default {
  PageContent
}
