import React from "react";
import LoginLeftSide from "../component/LoginLeftSide";
import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LoginLanding = () => {
  const portalsOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      discription:
        "Mange employees, attendance, payrolls, and organizational settings with ease",
      icon: ShieldIcon,
    },

    {
      to: "/login/employee",
      title: "Employee Portal",
      discription:
        "View your attendance, payrols, and manage your profile securely",
      icon: UserIcon,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* {header} */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome Back!
            </h2>
            <p className="text-gray-500">
              Select Your Portal to securely access the system
            </p>
          </div>
          {/* {Portals List} */}
          <div className="space-y-4">
            {portalsOptions.map((portal) => {
              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 "
                >
                  <div className="relative flex z-10 items-center justify-between gap-4 sm:gap-5">
                    <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">{portal.title}</h3>
                    <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
          {/* {Footer} */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            <p>©️ {new Date().getFullYear()} Ravi Kumar. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
