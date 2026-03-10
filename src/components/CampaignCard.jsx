function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}

function formatTime(timeStr) {
  if (!timeStr) return "";
  const [hourStr, minute] = timeStr.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

function CampaignCard({ campaign, isAdmin, onDelete, onEdit }) {
  return (
    <div className="col-md-4">
      <div
        className="card h-100 shadow-sm campaign-card"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-new-coronavirus-medical-drug-needle-syringe-image_587538.jpg')",
          backgroundSize: "cover",
          borderRadius: "12px"
        }}
      >
        <div className="card-body">

          <h5 className="fw-bold mb-2">{campaign.title}</h5>
          <p className="text-muted">{campaign.description}</p>

          <p><b>City:</b> {campaign.city}</p>
          <p><b>Venue:</b> {campaign.venue}</p>
          <p><b>Date:</b> {formatDate(campaign.date)}</p>
          <p><b>Time:</b> {formatTime(campaign.time)}</p>

          {isAdmin && (
            <>
              <span
                className={`badge mb-2 ${
                  campaign.status === "DELETED"
                    ? "bg-danger"
                    : campaign.status === "INACTIVE"
                    ? "bg-warning text-dark"
                    : "bg-success"
                }`}
              >
                {campaign.status}
              </span>

              <div className="mt-2">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(campaign)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(campaign.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
