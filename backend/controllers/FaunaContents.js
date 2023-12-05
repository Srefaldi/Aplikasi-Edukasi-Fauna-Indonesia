import FaunaContentModel from "../models/FaunaContentModel.js";

export const AddFauna = async (req, res) => {
    try {
        // Assuming you are sending data in the request body
        const { name, kategori_1, kategori_2, description, desc_habitat, desc_populasi } = req.body;

        // Create a new record in the FaunaContentModel
        const newFauna = await FaunaContentModel.create({
            name: name,
            kategori_1: kategori_1,
            kategori_2: kategori_2,
            description: description,
            desc_habitat: desc_habitat,
            desc_populasi: desc_populasi,
        });

        // Respond with the newly created record
        res.status(201).json(newFauna);
    } catch (error) {
        console.error("Error adding fauna:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};