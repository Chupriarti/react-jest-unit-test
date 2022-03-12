import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe('test app', () => {
    test('router test', () => {
        render(
            <MemoryRouter initialEntries={['/asasddss']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})
