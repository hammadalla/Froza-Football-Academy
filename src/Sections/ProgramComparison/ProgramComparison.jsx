import { useState } from "react";
import {
    FaCheckCircle,
    FaTimes,
    FaClock,
    FaUsers,
    FaMapMarkerAlt,
    FaTrophy,
    FaStar,
} from "react-icons/fa";

const ProgramComparison = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const comparisonData = [
        {
            feature: "Age Group",
            foundation: "3–6",
            development: "6–12",
            select: "12–16",
            scholarship: "16–18+",
            icon: <FaUsers />,
        },
        {
            feature: "Level",
            foundation: "Beginner",
            development: "Intermediate",
            select: "Advanced",
            scholarship: "Elite",
            icon: <FaStar />,
        },
        {
            feature: "Training Hours/Week",
            foundation: "2.25 hrs",
            development: "4 hrs",
            select: "6 hrs",
            scholarship: "12+ hrs",
            icon: <FaClock />,
        },
        {
            feature: "Coach Ratio",
            foundation: "1:6",
            development: "1:8",
            select: "1:10",
            scholarship: "1:12",
            icon: <FaUsers />,
        },
        {
            feature: "Location Availability",
            foundation: "✅ All Branches",
            development: "✅ All Branches",
            select: "✅ All Branches",
            scholarship: "📍 Abu Dhabi Only",
            icon: <FaMapMarkerAlt />,
        },
        {
            feature: "Competition Focus",
            foundation: "Fun Events",
            development: "Local Competitions",
            select: "Regional Championships",
            scholarship: "National/International",
            icon: <FaTrophy />,
        },
        {
            feature: "Monthly Investment",
            foundation: "AED 600",
            development: "AED 800",
            select: "AED 1,200",
            scholarship: "Scholarship Based",
            icon: <FaStar />,
        },
        {
            feature: "Assessment Required",
            foundation: "❌",
            development: "Basic Skills Check",
            select: "✅ Required",
            scholarship: "✅ Elite Level",
            icon: <FaCheckCircle />,
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Program Comparison</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Compare all our training programs to find the perfect fit for your swimming journey.
                    </p>
                </div>

                <div className="card shadow mb-5">
                    <div className="card-header bg-primary text-white text-center">
                        <h5 className="mb-0">Training Programs Overview</h5>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="text-start">Feature</th>
                                        <th>🏊‍♀️ Foundation</th>
                                        <th>🏊‍♂️ Development</th>
                                        <th>🏆 Select</th>
                                        <th>⭐ Scholarship</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData
                                        .slice(0, isExpanded ? comparisonData.length : 5)
                                        .map((row, index) => (
                                            <tr key={index}>
                                                <td className="text-start">
                                                    <span className="me-2">{row.icon}</span>
                                                    {row.feature}
                                                </td>
                                                <td>{row.foundation}</td>
                                                <td>{row.development}</td>
                                                <td>{row.select}</td>
                                                <td>{row.scholarship}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center py-3">
                            <button
                                className="Button-outlin"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Show Less Details" : "Show More Details"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramComparison;
