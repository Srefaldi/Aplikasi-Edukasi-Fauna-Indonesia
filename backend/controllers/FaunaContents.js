import FaunaContentModel from "../models/FaunaContentModel.js";
import { Op } from 'sequelize';
import path from "path";
import fs from "fs";
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA3_fUbYD9W3WJGJtmGqyYMsz0RaCkPHf8",
  authDomain: "api-edfa-id.firebaseapp.com",
  projectId: "api-edfa-id",
  storageBucket: "api-edfa-id.appspot.com",
  messagingSenderId: "919655701967",
  appId: "1:919655701967:web:9535134626e940e70346ba",
  measurementId: "G-SZCMZGZYTW"
};

initializeApp(firebaseConfig);

export const AddFauna = async (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
  
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const image_name = file.md5 + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];
  
    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });
  
    const storage = getStorage();
    const storageRef = ref(storage, 'fauna_images/' + image_name);
  
    try {
      // Upload the image to Firebase Storage
      await uploadString(storageRef, file.data.toString('base64'), 'base64');
  
      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);
  
      const { name, kategori_1, kategori_2, description, desc_habitat, desc_populasi } = req.body;
  
      const newFauna = await FaunaContentModel.create({
        name: name,
        image_name: image_name,
        image_url: imageUrl,
        kategori_1: kategori_1,
        kategori_2: kategori_2,
        description: description,
        desc_habitat: desc_habitat,
        desc_populasi: desc_populasi,
      });
  
      res.status(201).json({ msg: `Berhasil Menambahkan ${newFauna.name}` });
  
    } catch (error) {
      console.error("Error adding fauna:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const getAllfauna = async (req, res) => {
    try {
      const { search } = req.query;
      let whereCondition = {};
  
      // If there's a search term, add it to the query
      if (search) {
        whereCondition = {
          // Adjust this based on your data model and how you want to perform the search
          [Op.or]: [
            { name: { [Op.like]: `%${search}%` } },
            { kategori_1: { [Op.like]: `%${search}%` } },
            { kategori_2: { [Op.like]: `%${search}%` } },
            // Add more fields as needed
          ],
        };
      }
  
      const allFauna = await FaunaContentModel.findAll({ where: whereCondition });
  
      res.status(200).json(allFauna);
    } catch (error) {
      console.error('Error getting fauna:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getFaunaById = async (req, res) => {
    try {
        const { faunaId } = req.params;

        const fauna = await FaunaContentModel.findByPk(faunaId);

        if (!fauna) {
            return res.status(404).json({ error: 'Fauna not found' });
        }

        res.status(200).json(fauna);
    } catch (error) {
        console.error('Error getting fauna by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const editFaunaById = async (req, res) => {
    try {
        const { faunaId } = req.params;

        const fauna = await FaunaContentModel.findByPk(faunaId);

        if (!fauna) {
            return res.status(404).json({ error: 'Fauna not found' });
        }

        let image_name = fauna.image_name; // Default to the existing image name
        let image_url = fauna.image_url; // Default to the existing image URL

        if (req.files && req.files.file) {
            // A new file is being uploaded
            const file = req.files.file;
            const fileSize = file.data.length;
            const ext = path.extname(file.name);

            const allowedType = ['.png', '.jpg', '.jpeg'];
            if (!allowedType.includes(ext.toLowerCase())) {
                return res.status(422).json({ msg: 'Invalid Images' });
            }

            if (fileSize > 5000000) {
                return res.status(422).json({ msg: 'Image must be less than 5 MB' });
            }

            // Delete the previous image from Firebase Storage
            const storage = getStorage();
            const previousImageRef = ref(storage, 'fauna_images/' + image_name);

            try {
                await deleteObject(previousImageRef);
            } catch (deleteError) {
                console.error('Error deleting previous image from Firebase Storage:', deleteError);
            }

            // Convert file data to base64-encoded string
            const fileData = file.data.toString('base64');

            // Upload the new image to Firebase Storage
            const storageRef = ref(storage, 'fauna_images/' + file.md5 + ext);
            await uploadString(storageRef, fileData, 'base64');

            // Get the download URL of the uploaded image
            image_url = await getDownloadURL(storageRef);
            image_name = file.md5 + ext;
        }

        const { name, kategori_1, kategori_2, description, desc_habitat, desc_populasi } = req.body;
        await fauna.update({
            name: name,
            image_name: image_name,
            image_url: image_url,
            kategori_1: kategori_1,
            kategori_2: kategori_2,
            description: description,
            desc_habitat: desc_habitat,
            desc_populasi: desc_populasi,
        });

        res.status(200).json({ msg: `Berhasil Mengedit ${fauna.name}` });
    } catch (error) {
        console.error('Error editing fauna:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const deleteFaunaById = async (req, res) => {
    try {
        const { faunaId } = req.params;

        const fauna = await FaunaContentModel.findByPk(faunaId);

        if (!fauna) {
            return res.status(404).json({ error: 'Fauna not found' });
        }

        // Delete the image from Firebase Storage
        const storage = getStorage();
        const imageRef = ref(storage, 'fauna_images/' + fauna.image_name);

        try {
            await deleteObject(imageRef);
        } catch (deleteError) {
            console.error('Error deleting image from Firebase Storage:', deleteError);
        }

        // Delete the image from the local file system
        const imagePath = `./public/images/${fauna.image_name}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        // Delete the fauna record from the database
        await fauna.destroy();

        res.status(200).json({ msg: `Berhasil Menghapus ${fauna.name}` });
    } catch (error) {
        console.error('Error deleting fauna:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

