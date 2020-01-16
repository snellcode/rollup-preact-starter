import { Component, h } from 'preact'
import { Clock } from '@src/components/Clock'
import { store } from '@src/store'

let tick = true
setInterval(() => {
  tick = !tick
  store.set('clock.date', Date.now())
  console.log(tick ? 'tock' :  'tick')
}, 1000)

export class App extends Component {
  constructor () {
    super()
    store.paths({ clock: 'clock' }).link(this)
  }

  render (props, state) {
    const { clock } = state.store
    return (
      <Clock date={clock.date} format={clock.format} />
    )
  }
}
