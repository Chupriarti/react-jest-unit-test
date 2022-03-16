import { Provider } from "react-redux"
import { createReduxStore } from "../../store/store"

export const renderWithRedux = (conponent, initialStore) => {
    const store = createReduxStore(initialStore)

    return (
        <Provider store={store}>
            {conponent}
        </Provider>
    )
}
