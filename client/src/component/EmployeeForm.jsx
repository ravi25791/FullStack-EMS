import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isEditMode = !!initialData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" space-y-6 max-w-3xl animate-fade-in"
    >
      {/* personal information */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b border-slate-100">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div className="block mb-2">
            <label className="block mb-2">First Name</label>
            <input
              name="firstName"
              required
              defaultValue={initialData?.firstName}
            />
          </div>

          <div className="block mb-2">
            <label className="block mb-2">Last Name</label>
            <input
              name="lastName"
              required
              defaultValue={initialData?.lastName}
            />
          </div>

          <div className="block mb-2">
            <label className="block mb-2">Phone Number</label>
            <input name="phone" required defaultValue={initialData?.phone} />
          </div>

          <div className="block mb-2">
            <label className="block mb-2">Join Date</label>
            <input
              type="date"
              name="joinDate"
              required
              defaultValue={
                initialData?.joinDat
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2">Bio (Optional)</label>
            <textarea
              name="bio"
              defaultValue={initialData?.bio}
              rows={3}
              className=" resize-none"
              placeholder="Brief description..."
            />
          </div>
        </div>
      </div>

      {/* employment details */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium mb-6 pb-4 border-b border-slate-100 text-slate-900">
          Employment Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div>
            <label className="block mb-2">Department</label>
            <select
              name="department"
              defaultValue={initialData?.department || ""}
            >
              <option value="" disabled>
                Select department
              </option>
              {DEPARTMENTS.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="block mb-2">
              <label className="block mb-2">Position</label>
              <input name="position" required defaultValue={initialData?.position} />
            </div>
          </div>

          <div>
            <div className="block mb-2">
              <label className="block mb-2">Basic Salary</label>
              <input name="basicSalary" min="0" step="0.01" required defaultValue={initialData?.basicSalary || 0} />
            </div>
          </div>

        <div>
            <div className="block mb-2">
              <label className="block mb-2">Allowances</label>
              <input name="allowances" min="0" step="0.01" required defaultValue={initialData?.allowances || 0} />
            </div>
          </div>

          <div>
        <div>
        <div className="block mb-2">
              <label className="block mb-2">Deductions</label>
              <input name="deductions" min="0" step="0.01" required defaultValue={initialData?.deductions || 0} />
            </div>
          </div>
            
            {isEditMode && (
        <div>
            <div className="block mb-2">
              <label className="block mb-2">Status</label>
              <select name="employmentStatus" required defaultValue={initialData?.employmentStatus} >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
        </div>

            )}
          </div>

        </div>
      </div>

      {/* { Acount Setup} */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium mb-6 pb-4 text-slate-900 border-b border-slate-100">
          Account Setup
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div className="sm:col-span-2">
            <label className="block mb-2">Work Email</label>
            <input
            type="email"
              name="email"
              required
              defaultValue={initialData?.email}
            />
          </div>
          {!isEditMode && (
            <div>
            <label className="block mb-2">Temparory Password</label>
            <input
            type="password"
              name="password"
              required
            />
          </div>
          )}
        {isEditMode && (
            <div>
            <label className="block mb-2">Change Password (optional)</label>
            <input
            type="password"
              name="password"
              required
              placeholder="Leave black to keep current"
            />
          </div>
          )}

        <div>
            <label className="block mb-2">System Role</label>
            <select name="role" defaultValue={initialData?.role || "EMPLOYEE"}>
                <option value="EMPLOYEE">Employee</option>
                <option value="ADMIN">Admin</option>
            </select>
          </div>

        </div>
      </div>
      {/* {button} */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">

        <button type="button" className="btn-secondary" onClick={()=>(onCancel ? onCancel() : navigate(-1))}>
            Cancel
        </button>

         <button type="submit" className="btn-primary flex items-center justify-center" disabled={loading}>
            {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />}
            {isEditMode ? "Update Employee" : "Create Employee"}
        </button>

      </div>
    </form>
  );
};

export default EmployeeForm;
