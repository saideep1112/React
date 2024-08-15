const ShimmerLoader = () => {
  return (
    <div className="cards-container shimmer">
      <div className="card">
        <div className="card-media">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-discount"></div>
          <div className="shimmer shimmer-delivery-time"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <div className="shimmer shimmer-place-name"></div>
              <div className="shimmer shimmer-place-speciality"></div>
            </div>
            <div className="place-review">
              <div className="shimmer shimmer-rating"></div>
              <div className="shimmer shimmer-per-person"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoader;
