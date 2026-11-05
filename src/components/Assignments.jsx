
import React, { useState } from "react";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

const Assignments = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Sample assignment data
  const [assignments] = useState([
    {
      id: 1,
      title: "Mathematics Assignment",
      description:
        "Solve exercises 1 to 20 from Chapter 5: Algebra and submit your answers.",
      dueDate: "2026-11-10",
      status: "Pending",
      driveLink: "https://drive.google.com/",
    },
    {
      id: 2,
      title: "Science Project",
      description:
        "Prepare a project on the Solar System with diagrams and explanations.",
      dueDate: "2026-11-08",
      status: "Submitted",
      driveLink: "https://drive.google.com/",
    },
    {
      id: 3,
      title: "English Essay",
      description:
        "Write an essay on the importance of education in modern society.",
      dueDate: "2026-11-03",
      status: "Overdue",
      driveLink: "https://drive.google.com/",
    },
    {
      id: 4,
      title: "Computer Science",
      description:
        "Write a program to demonstrate basic JavaScript array operations.",
      dueDate: "2026-11-15",
      status: "Pending",
      driveLink: "https://drive.google.com/",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700";

      case "Submitted":
        return "bg-green-100 text-green-700";

      case "Overdue":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch =
      assignment.title.toLowerCase().includes(search.toLowerCase()) ||
      assignment.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || assignment.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full min-h-screen bg-amber-50 p-4 sm:p-6 md:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          My Assignments
        </h1>

        <p className="text-gray-500 mt-2">
          View your assignments, deadlines and submission status.
        </p>
      </div>

      {/* Assignment Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">Total Assignments</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {assignments.length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">Pending Assignments</p>
          <h2 className="text-3xl font-bold text-amber-600 mt-2">
            {assignments.filter(a => a.status === "Pending").length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-500">Submitted Assignments</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {assignments.filter(a => a.status === "Submitted").length}
          </h2>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">

        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm flex-1">
          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search assignments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-full bg-transparent"
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-white px-4 py-3 rounded-xl shadow-sm outline-none"
        >
          <option value="All">All Assignments</option>
          <option value="Pending">Pending</option>
          <option value="Submitted">Submitted</option>
          <option value="Overdue">Overdue</option>
        </select>

      </div>

      {/* Assignment List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (

            <div
              key={assignment.id}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >

              {/* Title and Status */}
              <div className="flex justify-between items-start gap-3">

                <div className="flex gap-3 items-center">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <FaFileAlt className="text-amber-600 text-xl" />
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    {assignment.title}
                  </h2>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap ${getStatusStyle(
                    assignment.status
                  )}`}
                >
                  {assignment.status}
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6 mt-5">
                {assignment.description}
              </p>

              {/* Due Date */}
              <div className="flex items-center gap-2 mt-5 text-gray-500">
                <FaCalendarAlt className="text-amber-500" />

                <span className="text-sm">
                  Due Date: {new Date(
                    assignment.dueDate + "T00:00:00"
                  ).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Drive Link */}
              <div className="mt-6 pt-4 border-t border-gray-100">

                <a
                  href={assignment.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition"
                >
                  View Drive Link
                  <FaExternalLinkAlt size={12} />
                </a>

              </div>

            </div>

          ))
        ) : (

          <div className="col-span-full text-center py-16 bg-white rounded-2xl">
            <FaFileAlt className="text-gray-300 text-5xl mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
              No Assignments Found
            </h2>

            <p className="text-gray-400 mt-2">
              Try changing your search or filter.
            </p>
          </div>

        )}

      </div>

    </div>
  );
};

export default Assignments;
