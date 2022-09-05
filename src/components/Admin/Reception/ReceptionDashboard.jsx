import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
export const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5050/appointment")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAppointments(data);
      });
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            return (
              <tr key={uniqid()}>
                <td>1</td>
                <td>{`${appointment.userInfo.firstName} ${appointment.userInfo.lastName}`}</td>
                <td>{appointment.userInfo.gender}</td>
                <td>{appointment.userInfo.age}</td>
                <td>{appointment.mobileNumber}</td>
                {console.log(appointment)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
