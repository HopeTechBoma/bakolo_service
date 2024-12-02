import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust this path based on your Firebase configuration file
import SiteFooter from '../site_component/SiteFooter';

const CarteVisite = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleShowDetails = (product) => {
    console.log('Show details for:', product);
    // Implement show details logic, e.g., open a modal or navigate to another page
  };

  const handleOrder = (product) => {
    console.log('Order product:', product);
    // Implement order logic, e.g., navigate to order form or add to cart
  };

  return (
    <>
      <div className="section7 transition_element t2_controlh carte_visit_header_bg">
        <div className="video-bg">
          <div className="vid_text_section">
            <h1>CARTE DE VISITES</h1>
          </div>
        </div>
      </div>

      <div className="page_service_content_section" style={{ width: '90%', margin: 'auto', padding: '20px' }}>
        {loading ? (
          <h2>Loading products...</h2>
        ) : products.length > 0 ? (
          <div className="products-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products.map(product => (
              <div
                key={product.id}
                className="product-card"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '15px',
                  width: '300px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                {product.fichier && (
                  <img
                    src={product.fichier}
                    alt={product.libelle}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                )}
                <h3>{product.libelle}</h3>
                <p>{product.description}</p>
                <div
                  className="button-group"
                  style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}
                >
                  <button
                    onClick={() => handleShowDetails(product)}
                    style={{
                      padding: '10px 15px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      flex: 1,
                      marginRight: '5px'
                    }}
                  >
                    Show Details
                  </button>
                  <button
                    onClick={() => handleOrder(product)}
                    style={{
                      padding: '10px 15px',
                      backgroundColor: '#28A745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>Aucun produit disponible pour le moment.</h2>
            <h3>Si vous avez un besoin, veuillez nous le soumettre par WhatsApp.</h3>
          </div>
        )}
      </div>

      <SiteFooter />
    </>
  );
};

export default CarteVisite;
