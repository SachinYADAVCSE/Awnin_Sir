import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Star, Quote } from "lucide-react";
import reviewGirl from '../../assets/reviewNew2.png';
import reviewBoy from '../../assets/reviewNew1.png';
import reviewImg3 from '../../assets/reviewImg4.jpeg';
import reviewImg4 from '../../assets/reviewNew4.png';
import reviewImg5 from '../../assets/reviewNew5.png';




const GoogleReviews = () => {
  const location = useLocation();
  const [googleReviews, setGoogleReviews] = useState([
    {
      reviewId: "12345623456789",
      reviewer: {
        displayName: "Aman Prajapati",
        profilePhotoUrl: reviewBoy,
      },
      starRating: "FIVE",
      comment: "This is the best place to improve commmunication skills in English. The best, I have ever visited, must visit place when you are in Jaunpur.",
      createTime: "2025-07-15T12:34:56Z",
      reviewReply: {
        comment: "Thanks for the feedback, Aman Prajapati!",
      },
    },
    {
      reviewId: "12345623456789",
      reviewer: {
        displayName: "Sachin Yadav",
        profilePhotoUrl: reviewImg4,
      },
      starRating: "FIVE",
      comment: "It's an great institute with great teacher. It's been 3 weeks, I can feel my english is improving and My confidence & body language!",
      createTime: "2022-01-15T12:34:56Z",
      reviewReply: {
        comment: "Thanks for the feedback, Sachin Yadav!",
      },
    },{
      reviewId: "12345623456789",
      reviewer: {
        displayName: "Pratiksha Dwivedi",
        profilePhotoUrl: reviewGirl,
      },
      starRating: "FIVE",
      comment: "This institute provides excellent training in spoken English and helps students gain confidence in communication. The classes are practical, interactive, and focused on real-life speaking situations. It is a great choice for students, professionals, and adults who want to improve their English fluency.",
      createTime: "2025-08-15T10:14:56Z",
      reviewReply: {
        comment: "Thanks for your review, Pratiksha!",
      },
    },{
      reviewId: "12345623456789",
      reviewer: {
        displayName: "Sudhanshu Srivastava",
        profilePhotoUrl: reviewImg5,
      },
      starRating: "FIVE",
      comment: "It is the best institute of English in Jaunpur UttarPradesh. It is a different kind of institute, I mean to say here we taught so my things in very unique way. There is no such institute in this entire Jaunpur. I have no words to say how amazing it is. Every student should come over here and improve their communication skills.",
      createTime: "2023-09-15T14:43:56Z",
      reviewReply: {
        comment: "Thanks a lot, Sudhanshu!",
      },
    },
    {
      reviewId: "9876543210654321",
      reviewer: {
        displayName: "Shiwalika Singh",
        profilePhotoUrl: reviewImg3,
      },
      starRating: "FIVE",
      comment: "Gold Classes is one of the best platforms for English speaking all over Jaunpur.In my opinion everyone should join this institute to improve their communicative skills.",
      createTime: "2025-01-18T14:20:00Z",
      reviewReply: {
        comment: "Thanks for review, Shiwalika Singh!",
      },
    },
  ]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews"
  //     );
  //     const result = response.data;

  //     if (result?.reviews) {
  //       addResult(result.reviews);
  //     } else {
  //       console.log("No reviews found");
  //     }
  //   } catch (err) {
  //     console.log("Error fetching reviews:", err);
  //   }
  // };

  // const addResult = (newReviews) => {
  //   setGoogleReviews((prev) => [...prev, ...newReviews]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [location.pathname]);

  const getStars = (rating) => {
    const count = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[rating] || 0;
    return [...Array(count)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="flex flex-col items-center mt-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {googleReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          googleReviews.map((review, index) => (
            <div
              key={review.reviewId || index}
              className="relative border rounded-2xl p-6 shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-gray-200" />

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.reviewer.profilePhotoUrl}
                  alt={review.reviewer?.displayName}
                  className="h-20 w-20 rounded-full border"
                  height={20}
                  width={30}
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {review.reviewer?.displayName || "Anonymous"}
                  </p>
                  <div className="flex">{getStars(review.starRating)}</div>
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>

              {/* Business Reply */}
              {review.reviewReply?.comment && (
                <div className="mt-4 p-3 border-l-4 border-teal-500 bg-teal-50 rounded">
                  <p className="text-sm text-gray-600">
                    <strong>Owner Response:</strong>{" "}
                    {review.reviewReply.comment}
                  </p>
                </div>
              )}

              {/* Date */}
              <p className="text-xs text-gray-500 mt-3">
                {new Date(review.createTime).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GoogleReviews;
