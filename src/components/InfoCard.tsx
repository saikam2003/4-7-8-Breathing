import React from "react";
import '../styles/animations.css';

const InfoCard = () => {
    return (
        <div className="mx-auto max-w-3xl mt-4">
            <div className="card p-4 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg">
                <div className="card-body justify-center items-center">
                    <p className="text-2xl font-bold text-white text-center">Based on an ancient yogic method called paranayama, the 4-7-8 Breathing Technique involves a specific pattern of breath regulation. This technique is also known as the "Navy SEAL technique" or the Military Sleep method since this method helps the paractitioner to focus on their breathing rather than worries that wander around the mind at night.</p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
