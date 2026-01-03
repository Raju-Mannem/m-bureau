
import { useEffect, useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BioDataList = () => {
    const navigate = useNavigate();
    const storedAdminName = localStorage.getItem("adminName");
    const [profiles, setProfiles] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!storedAdminName) {
            navigate("/admin-signin");
        }
    }, [storedAdminName, navigate]);

    useEffect(() => {
        const fetchYears = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/biodata/years`);
                setYears(res.data);
            } catch (err) {
                console.error("Error fetching years", err);
            }
        };
        fetchYears();
    }, []);

    useEffect(() => {
        const fetchProfiles = async () => {
            setLoading(true);
            try {
                let url = "http://localhost:5000/api/biodata";
                if (selectedYear) {
                    url += `?year=${selectedYear}`;
                }
                const res = await axios.get(url);
                setProfiles(res.data);
                setError(null);
            } catch (err) {
                setError("Failed to fetch profiles");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, [selectedYear]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/admin-signin");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full mx-2">
            <div className="h-full w-full">
                <NavbarDemo />
                <div className="my-16 py-12">
                     <div className="h-full mb-2 flex items-center justify-around flex-wrap border border-slate-300 dark:bg-gray-900 rounded-lg py-4">
                        <p className="sm:text-xs lg:text-sm">
                            Welcome: <strong className="text-green-500 sm:text-xs lg:text-sm">{storedAdminName}</strong>
                        </p>
                         <Link
                          to="/admin-dashboard"
                          className="bg-green-400 text-xs text-white px-4 py-1 rounded-full font-bold focus:outline-none mx-2"
                        >
                          Dashboard
                        </Link>
                         <button
                          onClick={handleLogout}
                          className="bg-green-400 focus:outline-none text-white text-xs lg:text-sm font-bold py-1 px-4 rounded-full mx-2 my-4"
                        >
                          Logout
                        </button>
                    </div>

                    <div className="container mx-auto px-4 my-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">BioData Profiles</h2>
                        
                        <div className="flex justify-center mb-6 gap-4 items-center">
                            <label className="font-semibold">Filter by Birth Year:</label>
                            <select 
                                value={selectedYear} 
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="border border-gray-300 rounded p-2"
                            >
                                <option value="">All Years</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>

                        {loading ? (
                             <div className="flex justify-center items-center h-64">
                                <p className="text-xl text-gray-500">Loading...</p>
                             </div>
                        ) : error ? (
                            <p className="text-red-500 text-center">{error}</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto bg-white border border-gray-300 shadow-sm rounded-md">
                                    <thead>
                                        <tr className="bg-green-400 text-white">
                                            <th className="px-4 py-2 border">Image</th>
                                            <th className="px-4 py-2 border">Birth Year</th>
                                            <th className="px-4 py-2 border">Summary</th>
                                            <th className="px-4 py-2 border">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {profiles.length > 0 ? profiles.map(profile => {
                                            // Try to find Name for summary
                                            const nameField = profile.data.find(d => d.label.toLowerCase().includes("name"));
                                            const name = nameField ? nameField.value : "Unknown";
                                            return (
                                                <tr key={profile._id} className="hover:bg-gray-50 text-center">
                                                    <td className="px-4 py-2 border">
                                                        {profile.imageUrl ? (
                                                            <img src={profile.imageUrl} alt="Profile" className="h-10 w-10 object-cover rounded-full mx-auto" />
                                                        ) : (
                                                            <span className="text-gray-400 text-xs">No Image</span>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border">{profile.birthYear || "N/A"}</td>
                                                    <td className="px-4 py-2 border text-left max-w-xs truncate">{name}</td>
                                                    <td className="px-4 py-2 border">
                                                        <Link 
                                                            to={`/bio-data/${profile._id}`} 
                                                            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-xs font-bold"
                                                        >
                                                            View/Edit
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }) : (
                                            <tr>
                                                <td colSpan="4" className="text-center py-4 text-gray-500">No profiles found for this year.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default BioDataList;
