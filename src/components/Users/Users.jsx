import "./Users.css";

const Users = ({ image, id, name, status, gender, species }) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              id={id}
              src={image}
              alt="Image"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back">
            <h4>Name:{name}</h4>
            <p>Status:{status}</p>
            <p>Gender:{gender}</p>
            <p>Species:{species}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
