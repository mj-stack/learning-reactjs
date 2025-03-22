import { useEffect, useState } from "react"

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  
  return (
    <>
      <p className="clock">The current time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </>
  )
}

export default Clock