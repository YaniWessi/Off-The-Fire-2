import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './productModal.css';

const SIZES = ['S', 'L', 'XL'];

const ProductModal = ({ item, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Close when clicking the backdrop (not the modal box itself)
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-box" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <img src={item.img} alt={item.name} className="modal-img" />

        <div className="modal-body">
          <h2 className="modal-name">{item.name}</h2>
          <p className="modal-price">{item.price}</p>

          <div className="modal-sizes">
            <p className="modal-sizes-label">Select Size</p>
            <div className="modal-sizes-row">
              {SIZES.map(size => (
                <button
                  key={size}
                  className={`size-btn${selectedSize === size ? ' size-btn--active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="modal-add-btn" disabled={!selectedSize}>
            {selectedSize ? `Add to Cart — ${selectedSize}` : 'Select a Size'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
