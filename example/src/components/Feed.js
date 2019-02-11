import React, { useState } from "react";
import { useSocket } from "use-socketio";
import { Cols, Col } from "./Cols";

import "./Feed.css";

export const Feed = () => {
  const [feeds, setFeeds] = useState([]);

  useSocket("tweet", next => console.log(next) || setFeeds([...feeds, next]));

  return (
    <div className="feed">
      {!feeds.length && (
        <div style={{ textAlign: "center", backgroundColor: "#efefef" }}>
          Waiting for tweets...
        </div>
      )}
      {feeds.map(feed => (
        <div className="feed-item" key={feed.id}>
          <Cols>
            <Col>
              <img
                alt="Twitter"
                src={feed.user.profile_image_url}
                className="feed-avatar"
              />
            </Col>
            <Col size={9}>
              <span className="feed-author">{feed.user.name}</span>
              <span className="feed-authorname">
                - @{feed.user.screen_name}
              </span>
              <p>{feed.text}</p>
            </Col>
          </Cols>
        </div>
      ))}
    </div>
  );
};
