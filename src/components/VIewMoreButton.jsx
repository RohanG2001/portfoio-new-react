export default function ViewMoreButton() {
  const handleViewMore = () => {
    // Add your logic here for viewing more projects
    alert("We're Working On It")
  };

  return (
    <button className="view-more-button" onClick={handleViewMore}>
      View More Projects
    </button>
  );
}

