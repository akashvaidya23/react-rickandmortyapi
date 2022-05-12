import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Users from "../Users/Users";

const Display = () => {
  const [users, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || []
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(users));
  }, [users]);

  const likeBtnHandler = (id) => {
    const items = [...users];
    items[id].isLike = !items[id].isLike;
    setUsers(items);
    console.log("Clicked " + id);
  };

  const profiles = users.map((user, index) => {
    return (
      <>
        <div className="col-md-4 my-4">
          <div style={{ marginTop: "100px" }}>
            <Users
              id={index}
              image={user.image}
              name={user.name}
              status={user.status}
              gender={user.gender}
              species={user.species}
            />
          </div>
          <div style={{ marginTop: "120px" }}>
            <Button text="Like" clickHandler={likeBtnHandler} />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="container">
        <h4>All People</h4>
        <div className="row">{profiles}</div>
      </div>
    </>
  );
};

export default Display;
