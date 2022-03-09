import axios from 'axios'
import React from 'react'

const Users = () => {
    const [users, setUsers] = React.useState([])

    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data)
    }

    React.useState(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {users.map(user => 
                <div key={user.id} data-testid="user-item">
                    {user.name}
                </div>
            )}
        </div>
    )
}

export default Users;
