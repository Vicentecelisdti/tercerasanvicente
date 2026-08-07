import React from 'react';

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
      {imageSrc && (
        <div className="card-image-wrap">
          <img src={imageSrc} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title-single" title={title}>{title}</h3>
        <div className="card-discount-badge-row">
          <span className="card-discount-badge">{discountText}</span>
        </div>
        <p className="card-description-text">{subtitle}</p>
        <button onClick={onOpenDetails} className="btn-card-details">
          Ver detalles
        </button>
      </div>
    </div>
  );
};
