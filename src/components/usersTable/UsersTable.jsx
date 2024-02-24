import React, { useEffect, useState } from "react"
import styles from "./user.table.module.css"
import SearchInput from "../searchInput/SearchInput"

const UsersTable = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await users?.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (id) => {
    const remainingUsers = users?.filter((user) => {
      return user?.id !== id
    })
    setUsers(remainingUsers)
  }

  const searchUserHandler = (name) => {
    const remainingUsers = users?.filter((user) => {
      return user?.name?.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
    setUsers(remainingUsers)
    if (!name) {
      getUsers()
    }
  }

  return (
    <div>
      <SearchInput searchUserHandler={searchUserHandler} />
      <table>
        <tr>
          <th>User ID</th>
          <th>Name </th>
          <th>User Name </th>
          <th>Email Address </th>
          <th>Phone </th>
          <th>Website </th>
          <th>Company </th>
          <th>... </th>
        </tr>
        {users?.map((user, i) => {
          return (
            <tr>
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.website}</td>
              <td>{user?.company?.name}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteUser(user?.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </table>

      <div className={styles.pagination_container}>
        <p>Previous</p>
        <p>Next</p>
      </div>
    </div>
  )
}

export default UsersTable
