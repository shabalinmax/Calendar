import './App.css';
import moment from "moment";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import Monitor from "./components/Monitor";
import React from "react";

function App() {
    const [x, setX] = React.useState(0)
    let startDay = moment().add(1, 'day').add(x, 'month').startOf('week')
    //
    const onClickBack = (mess) => {
        if (mess === 'back') {
            setX(x-1)

        }
        if (mess === 'forward') {
            setX(x+1)
        }
    }
    //

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
