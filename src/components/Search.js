import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState()
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = (e) => {
      if (e.key !== 'Enter') {
        return
      }

      github.clearUsers()

      if(value.trim()) {
        github.search(value.trim())
        alert.hide()
      }

      else {
        alert.show('Введите даные пользователя')
      }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      />
    </div>
  )
}