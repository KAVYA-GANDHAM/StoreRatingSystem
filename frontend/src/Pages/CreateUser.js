import { useState } from "react";
import { createUser } from "../api/adminApi";
import { useSelector } from "react-redux";
import './styles/Create.css';
const CreateUserPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", address: "", role: "normal" });
    const { user,token } = useSelector((state) => state.auth); // Assuming Redux is storing user data

   
    console.log("token",token);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData, token);
            alert("User created successfully!");
            setFormData({ name: "", email: "", password: "", address: "", role: "normal" });
        } catch (error) {
            alert(error.response?.data?.message || "Error creating user");
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="normal">Normal User</option>
                    <option value="store_owner">Store Owner</option>
                </select>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUserPage;
