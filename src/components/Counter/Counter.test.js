import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"


describe('Counter test', () => {
    test('Basic test', async () => {
        const {getByTestId} = render(<Counter />)

        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('0')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('1')
    })
})
