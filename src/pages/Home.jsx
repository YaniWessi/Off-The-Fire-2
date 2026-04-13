import { useState } from 'react';
import kidsplaying from '../assets/images/store-images/kidsplaying.jpg';
import greenBlackHoody from '../assets/images/store-images/green_black_hoody.png';
import blueSweater from '../assets/images/store-images/blue_sweater.png';
import graySweater from '../assets/images/store-images/gray_sweater.png';
import redBlackLongSleeve from '../assets/images/store-images/red_black_long_sleeve.png';
import whiteBlackLongSleeve from '../assets/images/store-images/white_black_long_sleeve.png';
import whiteGreenLongSleeve from '../assets/images/store-images/white_green_long_sleeve.png';
import greenOrangeCrewNeck from '../assets/images/store-images/green_orange_crew_neck.png';
import blackMultiLongSleeve from '../assets/images/store-images/black_multi_color_long_sleeve.png';
import blackGrayBennie from '../assets/images/store-images/black_gray_bennie.png';
import orangeBlueBennie from '../assets/images/store-images/orange_blue_bennie.png';
import ProductModal from '../components/molecules/product-modal/ProductModal';
import './home.css';

const newArrivals = [
  { id: 1, name: 'Green/Black Hoodie',       price: '$65',  img: greenBlackHoody },
  { id: 2, name: 'Blue Sweater',              price: '$55',  img: blueSweater },
  { id: 3, name: 'Red/Black Long Sleeve',     price: '$45',  img: redBlackLongSleeve },
  { id: 4, name: 'White/Black Long Sleeve',   price: '$45',  img: whiteBlackLongSleeve },
  { id: 5, name: 'Gray Sweater',              price: '$55',  img: graySweater },
  { id: 6, name: 'White/Green Long Sleeve',   price: '$45',  img: whiteGreenLongSleeve },
];

const headwear = [
  { id: 1, name: 'Black/Gray Beanie',       price: '$28',  img: blackGrayBennie },
  { id: 2, name: 'Orange/Blue Beanie',      price: '$28',  img: orangeBlueBennie },
  { id: 3, name: 'Green/Orange Crew Neck',  price: '$50',  img: greenOrangeCrewNeck },
  { id: 4, name: 'Multi-Color Long Sleeve', price: '$48',  img: blackMultiLongSleeve },
];

const ProductCard = ({ name, price, img, onClick }) => (
  <button className="product-card" onClick={onClick}>
    <div className="product-card-img-wrap">
      <img src={img} alt={name} className="product-card-img" />
    </div>
    <p className="product-card-name">{name}</p>
    <p className="product-card-price">{price}</p>
  </button>
);

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="home">

      {/* ── Spotlight Hero ── */}
      <div className="spotlight">
        <div className="spotlight-text">
          <h1 className="spotlight-heading">
            New Drop <span className="spotlight-icon">🔥</span>
          </h1>
          <p className="spotlight-sub">Where the culture meets the cold</p>
        </div>

        <img src={kidsplaying} alt="Off The Fire lifestyle" className="spotlight-img" />

        <div className="spotlight-desc">
          <p>
            Off The Fire drops fresh gear straight from the community.
            Each piece is built for the ones who move different —
            bold cuts, raw energy, limited runs.
          </p>
        </div>
      </div>

      {/* ── New Arrivals ── */}
      <section className="product-section">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
        </div>
        <div className="product-row">
          {newArrivals.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => setActiveItem(p)} />
          ))}
        </div>
      </section>

      {/* ── Headwear & Essentials ── */}
      <section className="product-section">
        <div className="section-header">
          <h2 className="section-title">Headwear &amp; Essentials</h2>
        </div>
        <div className="product-row">
          {headwear.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => setActiveItem(p)} />
          ))}
        </div>
      </section>

      {/* ── Product Modal ── */}
      {activeItem && (
        <ProductModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}

    </div>
  );
}
