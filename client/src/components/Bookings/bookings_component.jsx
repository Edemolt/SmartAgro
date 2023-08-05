    import { useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import "./bookings_styles.css";
import UserData from "./UserData";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]); // Renamed state variable to 'users'

  const callBookingsPage = async () => {
    try {
      const res = await fetch(`/bookingsbackend`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
    //   console.log(data);
      setUsers(data.bookings);
    //   console.log(data.Bookings);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("error", err); // Log the actual error message
      navigate("/login");
    }
  };

  useEffect(() => {
    callBookingsPage();
  }, []);

  return (
    <div className="booking_main">
      <NavBar />
      <div className="booking_table">
        <div className="Bookings_heading">All your bookings</div>

        <table id="table1">
          <thead>
            <th>Crop</th>
            <th>Land</th>
            <th>Yeild</th>
            <th>Price</th>
          </thead>
          <tbody>
            <UserData users={users} /> {/* Pass 'users' to UserData component */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
