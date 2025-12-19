import { Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import '@fontsource/roboto';
import '@fontsource-variable/noto-sans-jp';

const Dashboard = () => {
  const handleLogout = async () => {
    localStorage.clear();
    window.location.href = "/register";
  };
  const usermail = localStorage.getItem("usermail");
  const payment = localStorage.getItem("payment");
  const access = localStorage.getItem("access");
  const profiles = JSON.parse(localStorage.getItem("profiles")) || []; 
  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2 py-12">
      <div className="h-full">
        <NavbarDemo />
        <div className="h-full mt-28 mb-2 flex items-center justify-around dark:bg-gray-900 rounded-lg">
          <p className="sm:text-xs lg:text-sm">Welcome: <strong className="text-green-500">{usermail}</strong></p>
          <button
            onClick={handleLogout}
            className="bg-green-400 hover:bg-green-200 focus:outline-none text-white sm:text-xs lg:text-sm font-bold py-1 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="py-20 border-t border-green-200">
        {access === "false"? (
          <div>
          <p className="text-red-500 text-sm">
            you don&apos;t have access to the profiles
          </p>
          {payment === "false"? (
            <p className="text-red-500 text-sm">
              Please make payment to access the profiles
            </p>
          ):<p>payment done waiting for admin approval</p>
          }
          </div>
        ): <div>
            <>
            <p className="text-white text-sm lg:text-xl text-center bg-green-400 py-1">
              Profiles
              </p>
              <div className="h-full overflow-x-auto overflow-y-hidden">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-green-400 text-white text-sm">
                      <th className="border px-4 py-2">Full Name</th>
                      <th className="border px-4 py-2">Age</th>
                      <th className="border px-4 py-2">Occupation</th>
                      <th className="border px-4 py-2">Address</th>
                      <th className="border px-4 py-2" colSpan="2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.length > 0 ? (
                      profiles.map((profile) => (
                        <tr
                          key={profile._id}
                          className="hover:bg-slate-300 hover:text-white"
                        >
                          <td className="border px-4 py-2 text-xs">
                            {profile.fullName}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.age}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.occupation}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.currentAddress} 
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            <Link
                              to={`/profile/${profile._id}`}
                              className="text-xs text-red-400 underline rounded font-bold focus:outline-none"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="border px-4 py-2 text-center"
                        >
                          No profiles found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
        </div>
        }
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
