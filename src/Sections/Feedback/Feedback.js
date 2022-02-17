import React from "react";
import "./Feedback.css";
import kadyAvatar from "../../assets/avatar-kady.jpg";
import aiyshaAvatar from "../../assets/avatar-aiysha.jpg";
import arthurAvatar from "../../assets/avatar-arthur.jpg";
import CustomerFeedback from "../../Components/CustomerFeedback/CustomerFeedback";

const Feedbacks = {
    kady: {
        comment:
            "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
        name: "Kady Baker",
        jobTitle: "Product Manager at Bookmark",
        avatar: kadyAvatar,
    },
    aiysha: {
        comment:
            "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
        name: "Aiysha Reese",
        jobTitle: "Founder of Manage",
        avatar: aiyshaAvatar,
    },
    arthur: {
        comment:
            "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
        name: "Arthur Clarke",
        jobTitle: "Co-founder of MyPhysio",
        avatar: arthurAvatar,
    },
};

const FeedbackSection = () => {
    return (
        <section id="feedbacksection">
            <div className="feedback-container">
                <h2 style={{ textAlign: "center" }}>
                    Delivering real results for top <br />
                    companies. Some of our{" "}
                    <span style={{ color: "#79C8C7" }}>success stories.</span>
                </h2>
                <div className="feedbacks-wrapper">
                    {Object.entries(Feedbacks).map((item) => {
                        return (
                            <CustomerFeedback
                                comment={item[1].comment}
                                name={item[1].name}
                                jobTitle={item[1].jobTitle}
                                avatar={item[1].avatar}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
