import "./Elevator.css";

function Elevator({ elevatorArr }) {
  let currentIndexOfElevator = elevatorArr.indexOf(true);
  // console.log(currentIndexOfElevator);
  let topMargin = 300 - currentIndexOfElevator * 100;
  return <div style={{ top: `${topMargin}px` }} className="elevator"></div>;
}

export { Elevator };

// 0 -> 300
// 1 -> 200
