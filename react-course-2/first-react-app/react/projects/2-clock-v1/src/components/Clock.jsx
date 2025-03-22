function Clock() {
  const currentTime = new Date(Date.now()).toLocaleString()
  
  return (
    <>
      <p className="clock">The current time is: {currentTime}</p>
    </>
  )
}

export default Clock