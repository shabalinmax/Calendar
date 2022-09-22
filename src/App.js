import './App.css';
import moment from "moment";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import Monitor from "./components/Monitor";
import React from "react";

function App() {
    const [x, setX] = React.useState(0)
    console.log(moment())
    let startDay = moment().add(x, 'month').startOf('months').startOf('week').startOf('week')
    const [isPressBtn, setIsPressBtn] = React.useState(false)
    const onClickBack = (mess) => {
        if (mess === 'back') {
            setX(x-1)
        }
        if (mess === 'forward') {
            setX(x+1)
        }
    }
    React.useEffect(() => {
        console.log(startDay)
    }, [x])
  return (
    <div className="App">
      <CalendarGrid
          startDay = {startDay}
          onClickBack = {onClickBack}
      />
    </div>
  );
}

export default App;
