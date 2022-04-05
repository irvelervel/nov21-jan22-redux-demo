export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// this is called an ACTION CREATOR
// a function returning an action
export const incrementCounterAction = () => ({
  type: INCREMENT_COUNTER,
})

export const decrementCounterAction = () => ({
  type: DECREMENT_COUNTER,
})
