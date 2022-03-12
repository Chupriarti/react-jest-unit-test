import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithRouter } from "../../tests/helpers/renderWithRouter"
import Navbar from "./Navbar"


describe('Navbar test', () => {
  test('render', () => {
    renderWithRouter(<Navbar />)
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    const usersLink = screen.getByTestId('users-link')
    userEvent.click(aboutLink)
    expect(screen.getAllByTestId('about-page'))
    userEvent.click(mainLink)
    expect(screen.getAllByTestId('main-page'))
    userEvent.click(usersLink)
    expect(screen.getAllByTestId('users-page'))
  })
})
