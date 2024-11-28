import React, { useState } from 'react';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Modular SDK functions for storage
import { collection, addDoc } from 'firebase/firestore'; // Modular SDK for Firestore

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        libelle: '',
        description: '',
        type: '',
        prix: '',
        fichier: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            fichier: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.fichier) {
            // Reference to the Firebase Storage path
            const storageRef = ref(storage, `files/${formData.fichier.name}`);

            // Upload the file to Firebase Storage
            await uploadBytes(storageRef, formData.fichier);

            // Get the download URL for the uploaded file
            const fileUrl = await getDownloadURL(storageRef);

            // Add product to Firestore
            await addDoc(collection(db, 'products'), {
                libelle: formData.libelle,
                description: formData.description,
                type: formData.type,
                prix: formData.prix,
                fichier: fileUrl
            });

            alert('Product added successfully');
            setFormData({
                libelle: '',
                description: '',
                type: '',
                prix: '',
                fichier: null
            });
        } else {
            alert('Please upload a file.');
        }
    };

    return (
       <div className='add_item_section'>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Libelle:</label>
                <input type="text" name="libelle" value={formData.libelle} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} required />
            </div>
            <div>
                <label>Prix:</label>
                <input type="number" name="prix" value={formData.prix} onChange={handleChange} required />
            </div>
            <div>
                <label>Fichier:</label>
                <input type="file" onChange={handleFileChange} required />
            </div>
            <button type="submit">Enregistrer</button>
        </form>
       </div>
    );
};

export default AddProductForm;
