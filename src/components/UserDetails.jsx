import React from "react";
import { connect } from "react-redux";

const UserDetails = ({ match, history, posts }) => {
  console.log("SHOWING POSTS FOR USER ID: ", match.params.userId);
  const userPosts = posts.filter(
    post => post.userId.toString() === match.params.userId
  );
  console.log("POSTS: ", userPosts);

  return (
    <div>
      <h1 align="center">Posts:</h1>
      {userPosts.map(post => {
        return (
          <div
            key={post.id}
            style={{
              width: "70%",
              margin: "auto",
              marginBottom: "3rem",
              padding: "5vw",
              border: "1px solid black"
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
      <p>
        <button
          onClick={() => history.push("/")}
          style={{ position: "fixed", top: "0" }}
        >
          Go Home
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(UserDetails);
