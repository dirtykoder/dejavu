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
  const roommateIsAwake = hour == 7

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

      {roommateIsAwake &&
        <div>
          <p>
            As you sit up, you see your roommate, Allison, climbing out of bed. She looks
            quite grumpy. She's wearing a very low cut tanktop and a pair of dark blue panties.
          </p>

          <img src={capriceTanktop} style={globalStyles.image} />

          <p>
            "What the hell, {props.state.playerName}?!", she says, as her feet hit the floor.
            "Do you have to snooze your alarm so many damn times?"
          </p>

          <p>
            "Sorry," you say back, feeling a bit guilty.
          </p>

          <p>
            You watch as she walks over to her dresser, digs around and pulls out
            some clothes. Then she pulls her tanktop off and drops it to the floor,
            giving you a great view of her bare back for a moment. A second later, the
            view is gone, as she pulls on the shirt she pulled out, a white tanktop. Once
            it's pulled down into place, she pulls a pair of jeans on.
          </p>

          <p>
            As she starts brushing her hair, you snap out of your voyeuristic trance
            and realize you have stuff to do.
          </p>
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


        {roommateIsAwake &&
          <Option
            onClick={() => {
              // props.navigateToPage(SnoozeAlarm)
            }}
          >
            <div>Talk to Allison</div>
          </Option>
        }
      </Options>
    </Page>
  )
}

export default {
  PageContent
}
