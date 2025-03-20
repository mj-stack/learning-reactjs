const WelcomMessage = ({onGetPostsClick}) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts yet</h1>
      <button onClick={onGetPostsClick} type="button" className="btn btn-primary">Get posts from server</button>
    </center>
  )
}

export default WelcomMessage