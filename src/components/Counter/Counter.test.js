import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import Counter from "./Counter"
import { createReduxStore } from '../../store/store';


describe('Counter test', () => {
    test('Basic test', async () => {
        const {getByTestId} = render(
            <Provider 
                store={createReduxStore({
                    counter: {value: 10 }
                })}
            >
                <Counter />
            </Provider>
        )

        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})
