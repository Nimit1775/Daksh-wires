import React, { useState } from 'react';
import pr1 from '../assets/pr-1.jpeg';

const products = {
  highCarbonSteelWire: [
    { 
      id: 1, 
      name: 'Steel Wire', 
      image: 'path_to_image1', 
      description: {
        shape: 'Round',
        material: 'Carbon Steel',
        application: 'For making Springs, Wire Ropes, Industrial Brush, Fasteners, etc',
        coating: 'Phosphate coated and anti rust oil applied',
        countryOfOrigin: 'Made in India',
        availableSizes: '2mm-8mm',
        grade: '1,2,3',
        additionalInfo: {
          deliveryTime: 'As per order Size',
          packagingDetails: 'Plastic Packaging'
        }
      }
    },
    { 
      id: 2, 
      name: 'Steel Pins', 
      image: 'path_to_image2', 
      description: {
        shape: 'Round',
        material: 'Carbon Steel',
        application: 'For making Springs, Wire Ropes, Industrial Brush, Fasteners, etc',
        coating: 'Phosphate coated and anti rust oil applied',
        countryOfOrigin: 'Made in India',
        availableSizes: '2mm-8mm',
        grade: '1,2,3',
        additionalInfo: {
          deliveryTime: 'As per order Size',
          packagingDetails: 'Plastic Packaging'
        }
      }
    },
    // Add more products as needed
  ],
  anotherCategory: [
    { 
      id: 3, 
      name: 'Another Product', 
      image: 'path_to_image3', 
      description: {
        shape: 'Round',
        material: 'Carbon Steel',
        application: 'For making Springs, Wire Ropes, Industrial Brush, Fasteners, etc',
        coating: 'Phosphate coated and anti rust oil applied',
        countryOfOrigin: 'Made in India',
        availableSizes: '2mm-8mm',
        grade: '1,2,3',
        additionalInfo: {
          deliveryTime: 'As per order Size',
          packagingDetails: 'Plastic Packaging'
        }
      }
    },
    // Add more products as needed
  ]
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderProductCards = (categoryProducts) => (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {categoryProducts.map(product => (
        <div 
          key={product.id} 
          className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => setSelectedProduct(product)}
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div 
        className="relative bg-cover bg-center h-[100vh]"
        style={{backgroundImage: `url(${pr1})`}}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif text-center px-4 py-2 md:px-6 md:py-4 shadow-lg">
            Premium steel wires and pins for all your needs!
          </h1>
        </div> 
      </div>

      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">High Carbon Steel Wire</h2>
        {renderProductCards(products.highCarbonSteelWire)}
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Another Category</h2>
        {renderProductCards(products.anotherCategory)}
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-end p-2">
              <button onClick={() => setSelectedProduct(null)} className="text-gray-600 hover:text-gray-900">X</button>
            </div>
            <div className="flex p-4">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-1/2 h-auto object-cover rounded-l-lg" />
              <div className="w-1/2 p-4">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                <p><strong>Shape:</strong> {selectedProduct.description.shape}</p>
                <p><strong>Material:</strong> {selectedProduct.description.material}</p>
                <p><strong>Application:</strong> {selectedProduct.description.application}</p>
                <p><strong>Coating:</strong> {selectedProduct.description.coating}</p>
                <p><strong>Country of Origin:</strong> {selectedProduct.description.countryOfOrigin}</p>
                <p><strong>Available Sizes:</strong> {selectedProduct.description.availableSizes}</p>
                <p><strong>Grade:</strong> {selectedProduct.description.grade}</p>
                <h4 className="font-bold mt-4">Additional Information:</h4>
                <p><strong>Delivery Time:</strong> {selectedProduct.description.additionalInfo.deliveryTime}</p>
                <p><strong>Packaging Details:</strong> {selectedProduct.description.additionalInfo.packagingDetails}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
