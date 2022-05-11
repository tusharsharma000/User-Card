import { useEffect, useState } from "react";
import SocialCard from "./SocialCard";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const fetchapi = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let datas = data.results;
        setAllUsers(datas);
        setUsers(datas);
      });
  };
  useEffect(() => {
    fetchapi();
  }, []);

  const filtercard = (e) => {
    const value = e.target.value.toLowerCase();
    const filterusers = allusers.filter((items) => {
      return `${items.name.first} ${items.name.last}`
        .toLowerCase()
        .includes(value);
    });
    setUsers(filterusers);
  };
  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input
        type="text"
        className="search"
        placeholder="Search... "
        onInput={filtercard}
      />
      <div className="card_container">
        {users.map((user, index) => {
          return <SocialCard userdata={user} key={index} />;
        })}
      </div>
    </div>
  );
}
