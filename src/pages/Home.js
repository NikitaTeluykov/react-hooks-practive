import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {useContext} from "react";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search />
      {
        loading
        ? <p className={"text-center"}>Загрузка...</p>
          :
          users.map(user => {
              return (
                <div className="col-sm-4 my-4" key={user}>
                  <Card user={user}/>
                </div>
              )
            })
      }
      <div className="row">

      </div>
    </>
  )
}