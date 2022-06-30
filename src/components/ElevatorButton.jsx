import { useEffect } from "react";

function ElevatorButton({ elevatorIndex, addNewDestinyFloor }) {
  return (
    <div>
      <button
        onClick={() => {
          addNewDestinyFloor(elevatorIndex);
        }}
        className="elevator-btn"
      >
        Call Lift
      </button>
    </div>
  );
}

export { ElevatorButton };
