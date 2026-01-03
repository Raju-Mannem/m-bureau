
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

const BioDataDetails = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/biodata/${id}`);
                setProfile(res.data);
            } catch (err) {
                setError("Failed to fetch profile details");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
             <p>Loading...</p>
        </div>
    );

    if (error) return (
         <div className="flex justify-center items-center min-h-screen text-red-500">
             <p>{error}</p>
        </div>
    );

    if (!profile) return (
         <div className="flex justify-center items-center min-h-screen">
             <p>Profile not found</p>
        </div>
    );

    return (
        <div>
            <NavbarDemo />
            <div className="container mx-auto my-24 p-6 bg-white shadow-lg rounded-lg max-w-4xl">
                 <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">BioData Details</h1>
                    <Link to="/admin/biodata" className="text-blue-500 hover:underline">Back to List</Link>
                 </div>
                 
                 <div className="flex flex-col md:flex-row gap-8">
                     {/* Image Section */}
                     <div className="flex-shrink-0">
                         {profile.imageUrl ? (
                             <img src={profile.imageUrl} alt="Profile" className="w-64 h-64 object-cover rounded-lg shadow-md" />
                         ) : (
                             <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                 No Image
                             </div>
                         )}
                         <div className="mt-4 text-center text-gray-600">
                             <span className="font-semibold">Birth Year:</span> {profile.birthYear || "N/A"}
                         </div>
                     </div>

                     {/* Data Table Section */}
                     <div className="flex-grow">
                         <table className="w-full border-collapse">
                             <tbody>
                                 {profile.data && profile.data.map((item, index) => (
                                     <tr key={index} className="border-b hover:bg-gray-50">
                                         <td className="py-3 px-2 font-semibold text-gray-600 w-1/3 text-right pr-6">{item.label}</td>
                                         <td className="py-3 px-2 text-gray-800">{item.value || "-"}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
            </div>
            <Footer />
        </div>
    );
};

export default BioDataDetails;
