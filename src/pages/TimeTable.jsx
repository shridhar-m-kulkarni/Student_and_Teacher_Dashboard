
import React from "react";
import { useLocation } from "react-router-dom";

const TimeTable = () => {

  const location = useLocation();
  const user = location.state;

  const studentTimeTable = [
    {
      day: "Monday",
      subjects: ["English", "Maths", "Science", "Break", "Social", "Computer"]
    },
    {
      day: "Tuesday",
      subjects: ["Maths", "English", "Computer", "Break", "Science", "Social"]
    },
    {
      day: "Wednesday",
      subjects: ["Science", "Maths", "English", "Break", "Computer", "Social"]
    },
    {
      day: "Thursday",
      subjects: ["Social", "Computer", "Maths", "Break", "English", "Science"]
    },
    {
      day: "Friday",
      subjects: ["English", "Science", "Social", "Break", "Maths", "Computer"]
    },
    {
      day: "Saturday",
      subjects: ["Maths", "Computer", "English", "Break", "Library", "Sports"]
    }
  ];

  const teacherTimeTable = [
    {
      day: "Monday",
      subjects: ["7th A - Maths", "8th A - Maths", "Free", "Break", "9th A - Maths", "7th B - Maths"]
    },
    {
      day: "Tuesday",
      subjects: ["8th B - Maths", "7th A - Maths", "Free", "Break", "9th B - Maths", "8th A - Maths"]
    },
    {
      day: "Wednesday",
      subjects: ["9th A - Maths", "Free", "7th B - Maths", "Break", "8th A - Maths", "9th B - Maths"]
    },
    {
      day: "Thursday",
      subjects: ["7th A - Maths", "9th B - Maths", "8th B - Maths", "Break", "Free", "8th A - Maths"]
    },
    {
      day: "Friday",
      subjects: ["Free", "8th A - Maths", "7th B - Maths", "Break", "9th A - Maths", "7th A - Maths"]
    },
    {
      day: "Saturday",
      subjects: ["8th B - Maths", "7th A - Maths", "Free", "Break", "Library", "Sports"]
    }
  ];

  const periods = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00"
  ];

  const timetable =
    user?.role === "Teacher" || user?.role === "Admin"
      ? teacherTimeTable
      : studentTimeTable;

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-600">
            {user?.role === "Teacher" || user?.role === "Admin"
              ? "Teacher Timetable"
              : "Student Timetable"}
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome {user?.name || "User"}! Here is your weekly schedule.
          </p>
        </div>

        {/* User Information */}
        <div className="mb-6 rounded-xl bg-amber-500 p-5 text-white shadow-md">
          <h2 className="text-xl font-semibold">
            {user?.name}
          </h2>

          <p className="mt-1">
            ID: {user?.id}
          </p>

          <p>
            Role: {user?.role}
          </p>

          {user?.class && (
            <p>Class: {user.class}</p>
          )}

          {user?.section && (
            <p>Section: {user.section}</p>
          )}
        </div>

        {/* Timetable */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-lg">

          <table className="w-full min-w-[900px] border-collapse text-center">

            <thead>
              <tr className="bg-amber-500 text-white">
                <th className="border border-amber-300 p-4">
                  Day
                </th>

                {periods.map((period, index) => (
                  <th
                    key={index}
                    className="border border-amber-300 p-4"
                  >
                    <p>Period {index + 1}</p>
                    <p className="mt-1 text-xs font-normal">
                      {period}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {timetable.map((item, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-amber-50"
                >

                  <td className="border p-4 font-semibold text-amber-600">
                    {item.day}
                  </td>

                  {item.subjects.map((subject, subIndex) => (
                    <td
                      key={subIndex}
                      className={`border p-4 text-sm font-medium
                        ${subject === "Break"
                          ? "bg-orange-100 text-orange-600"
                          : subject === "Free"
                          ? "bg-gray-100 text-gray-500"
                          : "text-gray-700"
                        }`}
                    >
                      {subject}
                    </td>
                  ))}

                </tr>
              ))}
            </tbody>

          </table>

        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-5 text-sm">

          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-amber-500"></span>
            <span>Regular Period</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-orange-200"></span>
            <span>Break</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-gray-200"></span>
            <span>Free Period</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TimeTable;
