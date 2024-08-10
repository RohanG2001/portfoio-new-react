export default function ViewMoreButton() {
  const handleViewMore = () => {
    // Add your logic here for viewing more projects
    alert("We're Working On It")
  };

  return (
    <button className="view-more-button" onClick={handleViewMore}>
      View More Proj.... <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
}

