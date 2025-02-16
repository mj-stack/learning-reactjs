import Student from "./Students";

function App() {

  return(
    <>
      <Student name="Mukul Joshi" age={21} isStudent={true}/>
      <Student name="Anmol Bisht" age={21} isStudent={true}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
    </>
  );
}

export default App;