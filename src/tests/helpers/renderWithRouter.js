import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export const renderWithRouter = (component, inititalRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[inititalRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}
