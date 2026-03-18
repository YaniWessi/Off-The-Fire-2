import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  { id: 1, name: 'Black/Gray Beanie',      price: '$28',  img: blackGrayBennie },
  { id: 2, name: 'Orange/Blue Beanie',     price: '$28',  img: orangeBlueBennie },
  { id: 3, name: 'Green/Orange Crew Neck', price: '$50',  img: greenOrangeCrewNeck },
  { id: 4, name: 'Multi-Color Long Sleeve',price: '$48',  img: blackMultiLongSleeve },
];

const ProductCard = ({ name, price, img }) => (
  <div className="product-card">
    <div className="product-card-img-wrap">
      <img src={img} alt={name} className="product-card-img" />
    </div>
    <p className="product-card-name">{name}</p>
    <p className="product-card-price">{price}</p>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-title">{title}</h2>
    <div className="section-controls">
      <Link to="/shop" className="section-view-all">View all</Link>
    </div>
  </div>
);

export default function Home() {
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
          <Link to="/shop" className="spotlight-btn">Shop Now</Link>
        </div>
      </div>

      {/* ── New Arrivals ── */}
      <section className="product-section">
        <SectionHeader title="New Arrivals" />
        <div className="product-row">
          {newArrivals.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

      {/* ── Headwear & Essentials ── */}
      <section className="product-section">
        <SectionHeader title="Headwear & Essentials" />
        <div className="product-row">
          {headwear.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

    </div>
  );
}
