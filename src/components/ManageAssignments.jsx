
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "assignments";

const initialForm = {
  title: "",
  description: "",
  dueDate: "",
  driveLink: "",
  status: "Pending",
};

const ManageAssignments = () => {
  const [assignments, setAssignments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Save assignments in Local Storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
  }, [assignments]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create or update assignment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setAssignments((prev) =>
        prev.map((assignment) =>
          assignment.id === editId
            ? { ...assignment, ...formData }
            : assignment
        )
      );
    } else {
      const newAssignment = {
        id: Date.now(),
        ...formData,
      };

      setAssignments((prev) => [...prev, newAssignment]);
    }

    setFormData(initialForm);
    setEditId(null);
    setShowForm(false);
  };

  // Edit assignment
  const handleEdit = (assignment) => {
    setFormData({
      title: assignment.title,
      description: assignment.description,
      dueDate: assignment.dueDate,
      driveLink: assignment.driveLink,
      status: assignment.status,
    });

    setEditId(assignment.id);
    setShowForm(true);
  };

  // Delete assignment
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (confirmDelete) {
      setAssignments((prev) =>
        prev.filter((assignment) => assignment.id !== id)
      );
    }
  };

  // Cancel form
  const handleCancel = () => {
    setFormData(initialForm);
    setEditId(null);
    setShowForm(false);
  };

  return (
    <div className="w-full min-h-screen bg-amber-50 p-4 sm:p-6 md:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Manage Assignments
          </h1>

          <p className="text-gray-500 mt-2">
            Create, update and manage student assignments.
          </p>
        </div>

        <button
          onClick={() => {
            setFormData(initialForm);
            setEditId(null);
            setShowForm(true);
          }}
          className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + Create Assignment
        </button>

      </div>

      {/* Assignment Form */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-7 mb-8">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {editId !== null ? "Edit Assignment" : "Create New Assignment"}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Title */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Assignment Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter assignment title"
                required
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-amber-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter assignment description"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-xl p-3 outline-none resize-none focus:border-amber-500"
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-amber-500"
              />
            </div>

            {/* Drive Link */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Google Drive Link
              </label>

              <input
                type="url"
                name="driveLink"
                value={formData.driveLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/..."
                required
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-amber-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-amber-500"
              >
                <option value="Pending">Pending</option>
                <option value="Submitted">Submitted</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">

              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                {editId !== null ? "Update Assignment" : "Create Assignment"}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold"
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Assignment Count */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Total Assignments: {assignments.length}
        </h2>
      </div>

      {/* Assignment List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {assignments.length > 0 ? (
          assignments.map((assignment) => (

            <div
              key={assignment.id}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100"
            >

              <div className="flex justify-between items-start gap-3">

                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  {assignment.title}
                </h2>

                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {assignment.status}
                </span>

              </div>

              <p className="text-gray-600 text-sm mt-4 leading-6">
                {assignment.description}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Due Date: {assignment.dueDate}
              </p>

              <a
                href={assignment.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline text-sm mt-4 break-all"
              >
                Open Google Drive Link ↗
              </a>

              <div className="flex gap-3 mt-6 pt-4 border-t">

                <button
                  onClick={() => handleEdit(assignment)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(assignment.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        ) : (

          <div className="col-span-full bg-white rounded-2xl p-12 text-center shadow-sm">

            <h2 className="text-xl font-semibold text-gray-700">
              No Assignments Available
            </h2>

            <p className="text-gray-500 mt-2">
              Click Create Assignment to add your first assignment.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default ManageAssignments;
