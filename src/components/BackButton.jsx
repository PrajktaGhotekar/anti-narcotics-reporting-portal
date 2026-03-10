import { useNavigate } from "react-router-dom";


function BackButton({ to, label = "Back" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="btn btn-outline-primary mb-3"
      style={{
        fontSize: "15px",
        fontWeight: "500",
        borderRadius: "8px",
      }}
    >
      ← {label}
    </button>
  );
}

export default BackButton;
