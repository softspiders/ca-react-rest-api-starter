import React, { useContext } from 'react'
import Counter from './Counter'
import { AppContext } from '../AppFactory'

const App = (): JSX.Element => {
  const { counterPresenter } = useContext(AppContext)
  const [state, api] = counterPresenter

  return (
    <Counter
      counter={state.counter}
      onIncrementClick={api.increment}
      onResetClick={api.reset}
    />
  )
}

export default App
