import React from "react"
import styles from "./search.input.module.css"
const SearchInput = ({ searchUserHandler }) => {
  return (
    <input
      className={styles.search_input}
      type="text"
      placeholder="Search By 'Name'"
      onChange={(e) => searchUserHandler(e.target.value)}
    />
  )
}

export default SearchInput
