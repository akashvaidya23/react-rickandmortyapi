import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import LikeButton from "./LikeButton";
import "./Routing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  const [user, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [offSet, setOffset] = useState(6);

  const start = (currentPage - 1) * offSet;
  const end = currentPage * offSet;

  const changePageHandler = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("userData"))) {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.results);
        });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  const likeButtonToggleHandler = (userIndex) => {
    const items = [...user];
    items[userIndex].isLike = !items[userIndex].isLike;
    setUsers(items);
  };

  const userData = [];
  for (let i = start; i < end && user.length > 0; i++) {
    const eachUser = (
      <div key={i} className="col-md-4 my-2 ">
        <div className="users">
          <Card
            image={user[i].image}
            name={user[i].name}
            status={user[i].status}
            gender={user[i].gender}
            species={user[i].species}
          />
          <div className="likeButton">
            <LikeButton
              likeButtonToggleHandler={() => likeButtonToggleHandler(i)}
              liked={user[i].isLike}
            />
            <FontAwesomeIcon icon="check-square" />
          </div>
        </div>
      </div>
    );
    userData.push(eachUser);
  }

  return (
    <>
      <div className="container">
        <div className="row">{userData}</div>
      </div>
      <div>
        <div className="d-flex 3 mx-3 justify-content-center bg-dark ">
          <Pagination
            totalPost={user.length}
            dataPerPage={offSet}
            changePageHandler={changePageHandler}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
