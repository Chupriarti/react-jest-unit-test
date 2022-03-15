import counterReducer, { decrement, increment } from "./counterReducer"

describe('getCounterValue', () => {
  test('increment', () => {
    expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
  })
}) 
