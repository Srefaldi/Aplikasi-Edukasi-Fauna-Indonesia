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

export const getFauna = async (req, res) => {
    try {
        const allFauna = await FaunaContentModel.findAll();

        res.status(200).json(allFauna);
    } catch (error) {
        console.error('Error getting fauna:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};