import React from 'react';
import { Percent } from 'lucide-react';

interface ConvenioCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  discountText: string;
  onOpenDetails: () => void;
}

export const ConvenioCard: React.FC<ConvenioCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  discountText,
  onOpenDetails
}) => {
  return (
    <div className="convenio-card">
      <div className="card-image-wrap">
        <img src={imageSrc} alt={title} className="card-image" />
        <span className="discount-badge"><Percent size={14} /> {discountText}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-text">{description}</p>
        <button onClick={onOpenDetails} className="btn-card-details">
          Ver detalles
        </button>
      </div>
    </div>
  );
};
