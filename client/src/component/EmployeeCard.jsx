import React from "react";
import { PencilIcon, Trash2Icon, TrashIcon } from "lucide-react";

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
    const handleDelete = async ()=>{
        if(!confirm("Are you sure you want to delete this employee?")) return;
    }
  return (
    <div className="group relative card card-hover overflow-hidden">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-50">
        {/* circleIcon */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-100 to-slate-100 flex items-center justify-center">
            <span className="text-2xl font-medium text-indigo-400">
              {employee.firstName[0]} {employee.lastName[0]}
            </span>
          </div>
          {/* <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2'>
                    <button onClick={()=>onEdit(employee)} className='p-1 rounded text-slate-400 hover:text-blue-500'>
                        <PencilIcon size={16} />
                    </button>
                    <button onClick={()=>onDelete(employee.id)} className='p-1 rounded text-slate-400 hover:text-red-500'>
                        <TrashIcon size={16} />
                    </button>
                </div> */}
        </div>
      </div>
      <div className=" absolute top-3 left-3 flex gap-2">
        <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 text-sm font-semibold text-slate-600 rounded-lg shadow-sm">
          {employee.department || "Remote"}
        </span>
        {employee.isDeleted && (
          <span className="bg-rose-100 text-rose-600 px-2.5 py-1 text-sm font-semibold rounded-lg shadow-sm">
            Deleted
          </span>
        )}
      </div>

      {!employee.isDeleted && (
        <div className=" absolute inset-0 bg-linear-to-t from-indigo-700/20 via-transparent opacity-0 group-hover:opacity-100 transition-opacity  flex items-center justify-center gap-3 pb-6">
            <button onClick={()=>onEdit(employee)} className='p-2.5 bg-white/90 backdrop-blur-sm transition-all rounded-xl text-slate-700 shadow-lg hover:text-indigo-600 hover:scale-105'>
                <PencilIcon className="h-4 w-4" size={16} />
            </button>
            <button onClick={handleDelete} className='p-2.5 bg-white/90 backdrop-blur-sm transition-all rounded-xl text-slate-700 shadow-lg hover:text-rose-600 hover:scale-105 disabled:opacity-50'>
                <Trash2Icon className="h-4 w-4" size={16} />
            </button>
        </div>
      )}
 
      <div className="p-5">
        <h3 className="text-slate-900">
          {employee.firstName} {employee.lastName}
        </h3>
        <p className="text-xs text-slate-500">{employee.position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
