import FaunaContentModel from "../models/FaunaContentModel.js";

export const AddFauna = async (req, res) => {
    try {
        const { name, kategori_1, kategori_2, description, desc_habitat, desc_populasi } = req.body;

        const newFauna = await FaunaContentModel.create({
            name: name,
            kategori_1: kategori_1,
            kategori_2: kategori_2,
            description: description,
            desc_habitat: desc_habitat,
            desc_populasi: desc_populasi,
        });

        res.status(201).json({msg: `Berhasil Menambahkan ${newFauna.name}`});
    } catch (error) {
        console.error("Error adding fauna:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllfauna = async (req, res) => {
    try {
        const allFauna = await FaunaContentModel.findAll();

        res.status(200).json(allFauna);
    } catch (error) {
        console.error('Error getting fauna:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getFaunaById = async (req, res) => {
    try {
        // Assuming the ID is passed as a parameter in the request
        const { faunaId } = req.params;

        // Find a fauna record by ID in the FaunaContentModel
        const fauna = await FaunaContentModel.findByPk(faunaId);

        // Check if the fauna record is found
        if (!fauna) {
            return res.status(404).json({ error: 'Fauna not found' });
        }

        // Respond with the found fauna record
        res.status(200).json(fauna);
    } catch (error) {
        console.error('Error getting fauna by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
