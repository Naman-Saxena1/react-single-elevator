import { useState, useEffect } from "react";
import "./styles.css";
import { Elevator } from "./components/Elevator";
import { ElevatorButton } from "./components/ElevatorButton";

export default function App() {
  const [elevatorArr, setElevatorArr] = useState([true, false, false, false]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [destinyFloor, setDestinyFloor] = useState(0);
  const [allDestinyFloors, setAllDestinyFloors] = useState([]);
  const [isLiftAvailable, setIsLiftAvailable] = useState(true);

  useEffect(() => {
    let liftState = [false, false, false, false];
    liftState[currentFloor] = true;
    setTimeout(() => {
      setElevatorArr((prevState) => liftState);
      if (currentFloor !== destinyFloor) {
        callLift(destinyFloor);
      } else {
        if (allDestinyFloors.length > 0) {
          callLift(allDestinyFloors.shift());
        } else {
          setIsLiftAvailable(true);
        }
      }
    }, 2000);
  }, [currentFloor]);

  function addNewDestinyFloor(elevatorIndex) {
    if (isLiftAvailable) {
      setIsLiftAvailable(false);
      callLift(elevatorIndex);
    } else {
      allDestinyFloors.push(elevatorIndex);
    }
  }

  function callLift(elevatorIndex) {
    setDestinyFloor(elevatorIndex);
    if (elevatorIndex > currentFloor) {
      setCurrentFloor((prevCurrentFloor) => prevCurrentFloor + 1);
    } else {
      if (currentFloor > elevatorIndex) {
        setCurrentFloor((prevCurrentFloor) => prevCurrentFloor - 1);
      }
    }
  }

  return (
    <div className="App">
      <div className="elevator-container">
        <Elevator elevatorArr={elevatorArr} />
        <div className="elevator-btn-container">
          {elevatorArr.map((level, index) => (
            <ElevatorButton
              key={index}
              elevatorIndex={3 - index}
              addNewDestinyFloor={addNewDestinyFloor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
