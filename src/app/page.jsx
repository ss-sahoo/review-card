import LikeDislikeComponent from "./components/LikeDislikeComponent";
import RatingReview from "./components/RatingReview";
export default function Page() {
  return (
    <div className="card-container">
      <div>
        <div className="close-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="header">
          <h2>Leave a Review</h2>
        </div>
      </div>

      <RatingReview
        title={"Safety"}
        subTitle={"How safe is the safety of the site?"}
      />
      <RatingReview
        title={"Communication"}
        subTitle={"How friendly was the communication?"}
      />
      <LikeDislikeComponent
        title={"Would you recommend Trausti?"}
        subTitle={"Give us your feedback"}
      />
    </div>
  );
}
