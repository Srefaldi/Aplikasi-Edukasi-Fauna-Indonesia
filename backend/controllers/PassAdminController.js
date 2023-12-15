import PassAdmin from "../models/PassAdminModel.js";
import bcrypt from "bcrypt";


export const addPassAdmin = async (req, res) => {
    try {
        const { password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await PassAdmin.create({
            password: hashPassword,
        });

        res.status(201).json({msg: "Password Berhasil ditambahkan"});
    } catch (error) {
        console.error("Error adding quiz:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getPassAdmin = async (req, res) => {
    try {
        const passAdminData = await PassAdmin.findAll({
            attributes: ['id', 'password', 'createdAt', 'updatedAt'],
        });

        res.status(200).json({ passAdminData }); // Send the actual data in the response
    } catch (error) {
        console.error("Error getting password admin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
