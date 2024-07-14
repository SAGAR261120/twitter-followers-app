import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
        setFilteredFollowers(data);
      });
  }, []);

  const handleSort = (criteria) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);
    setSortCriteria(criteria);

    const sortedFollowers = [...filteredFollowers].sort((a, b) => {
      return order === "asc"
        ? a.twubric[criteria] - b.twubric[criteria]
        : b.twubric[criteria] - a.twubric[criteria];
    });

    setFilteredFollowers(sortedFollowers);
  };

  const handleRemove = (id) => {
    const updatedFollowers = filteredFollowers.filter(
      (follower) => follower.uid !== id
    );
    setFilteredFollowers(updatedFollowers);
  };

  const handleFilterByDate = () => {
    if (startDate && endDate) {
      const filtered = followers.filter((follower) => {
        const joinedDate = new Date(follower.join_date * 1000);
        return joinedDate >= startDate && joinedDate <= endDate;
      });
      setFilteredFollowers(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Twitter Followers</h1>
      <div className="filters">
        <div>
          <span>Sort By: </span>
          <button onClick={() => handleSort("total")}>Twubric Score</button>
          <button onClick={() => handleSort("friends")}>Friends</button>
          <button onClick={() => handleSort("influence")}>Influence</button>
          <button onClick={() => handleSort("chirpiness")}>Chirpiness</button>
        </div>
        <div>
          <span>Joined Twitter between: </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="From Date"
          />{" "}
          &nbsp; &nbsp;
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="To Date"
          />
          <button onClick={handleFilterByDate}>Filter</button>
        </div>
      </div>
      <div className="follower-grid">
        {filteredFollowers.map((follower) => (
          <div key={follower.uid} className="follower-card">
            <img
              src={follower.image}
              alt={follower.fullname}
              className="follower-image"
            />
            <h3>{follower.fullname}</h3>
            <p>Username: {follower.username}</p>
            <p>Friends: {follower.twubric.friends}</p>
            <p>Influence: {follower.twubric.influence}</p>
            <p>Chirpiness: {follower.twubric.chirpiness}</p>
            <p>Score: {follower.twubric.total}</p>
            <p>
              Joined: {new Date(follower.join_date * 1000).toLocaleDateString()}
            </p>
            <button onClick={() => handleRemove(follower.uid)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
