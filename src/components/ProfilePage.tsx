import React, { useState } from 'react';
import { useViewContext } from '../context/ViewContext';

const ProfilePage: React.FC = () => {
    const { userData } = useViewContext();
    const [editableData, setEditableData] = useState(userData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "profilePicture" && files && files[0]) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setEditableData({ ...editableData, profilePicture: imageUrl });
        } else {
            setEditableData({ ...editableData, [name]: value });
        }
    };

    const isDataChanged = JSON.stringify(editableData) !== JSON.stringify(userData);

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Profile Page</h1>
            <div className="profile-info grid grid-cols-1 gap-y-6">
                <div className="profile-picture flex justify-center mb-6">
                    <label htmlFor="profilePicture" className="cursor-pointer">
                        <img
                            src={editableData.profilePicture}
                            alt="Profile Picture"
                            className="w-60 h-60 rounded-full object-cover shadow-lg"
                        />
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-2">
                        <input
                            type="text"
                            name="name"
                            value={editableData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="email"
                            name="email"
                            value={editableData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="text"
                            name="plan"
                            value={editableData.plan}
                            onChange={handleChange}
                            placeholder="Plan"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="text"
                            name="position"
                            value={editableData.position}
                            onChange={handleChange}
                            placeholder="Position"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="text"
                            name="company"
                            value={editableData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="text"
                            name="phone"
                            value={editableData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="p-2">
                        <input
                            type="text"
                            name="address"
                            value={editableData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full p-3 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <button
                    className={`mt-6 w-36 px-3 mx-auto py-2 font-bold text-white bg-blue-500 rounded ${!isDataChanged ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isDataChanged}
                    onClick={() => {
                        console.log('Änderungen gespeichert:', editableData);
                    }}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfilePage; 