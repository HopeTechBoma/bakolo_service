import React, { useState } from 'react';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Modular SDK for Storage
import { collection, addDoc } from 'firebase/firestore'; // Modular SDK for Firestore

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        libelle: '',
        description: '',
        type: '',
        prix: '',
        fichier: null
    });

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                fichier: e.target.files[0]
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fichier) {
            alert('Please upload a file.');
            return;
        }

        try {
            // Firebase Storage Reference
            const storageRef = ref(storage, `files/${formData.fichier.name}`);
            console.log('Uploading file:', formData.fichier.name);

            // Upload file to Firebase Storage
            await uploadBytes(storageRef, formData.fichier);
            console.log('File uploaded successfully');

            // Get download URL for the file
            const fileUrl = await getDownloadURL(storageRef);
            console.log('File available at:', fileUrl);

            // Add product data to Firestore
            await addDoc(collection(db, 'products'), {
                libelle: formData.libelle,
                description: formData.description,
                type: formData.type,
                prix: formData.prix,
                fichier: fileUrl
            });
            console.log('Product added to Firestore');

            // Success alert
            alert('Product added successfully');

            // Reset form data
            setFormData({
                libelle: '',
                description: '',
                type: '',
                prix: '',
                fichier: null
            });

            // Reset file input
            e.target.reset();
        } catch (error) {
            console.error('Error during submission:', error);
            alert('An error occurred. Please check the console for details.');
        }
    };

    return (
        <div className='add_item_section'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Libelle:</label>
                    <input
                        type="text"
                        name="libelle"
                        value={formData.libelle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Prix:</label>
                    <input
                        type="number"
                        name="prix"
                        value={formData.prix}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Fichier:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="save_services">
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
