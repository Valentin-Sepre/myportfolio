import React from 'react';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

const GitHub = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-black">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-6 text-[rgb(57,255,20)] text-center mt-3">Mes projets GitHub</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {/* Première ligne */}
                        <div className="relative border border-[rgb(57,255,20)] rounded-lg overflow-hidden shadow-md">
                            <Link target="_blank" rel="noopener noreferrer" href="https://valentin-sepre.github.io/Nathalie.Sepre/" passHref>
                                <img src="Nathalie.png" alt="Nathalie Sepré" className="w-full h-72 object-cover cursor-pointer" />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-center text-[rgb(57,255,20)] font-bold mb-2">Nathalie Sepré</h3>
                                <div className="flex justify-center">
                                    <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" className="mx-2 w-16" />
                                    <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" className="mx-2 w-16" />
                                    <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" className="mx-2 w-16" />
                                </div>
                            </div>
                        </div>

                        <div className="relative border border-[rgb(57,255,20)] rounded-lg overflow-hidden shadow-md">
                            <Link target="_blank" rel="noopener noreferrer" href="https://valentin-sepre.github.io/Climbing-Spots/" passHref>
                                <img src="Climbing.png" alt="Climbing Spots" className="w-full h-72 object-cover cursor-pointer" />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-center text-[rgb(57,255,20)] font-bold mb-2">Climbing Spots</h3>
                                <div className="flex justify-center">
                                    <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" className="mx-2 w-16" />
                                    <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" className="mx-2 w-16" />
                                    <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" className="mx-2 w-16" />
                                </div>
                            </div>
                        </div>

                        {/* Deuxième ligne */}
                        <div className="relative border border-[rgb(57,255,20)] rounded-lg overflow-hidden shadow-md">
                            <img src="Zeit.png" alt="Zeït Studio" className="w-full objet-contain" />
                            <div className="p-4 text-[rgb(57,255,20)]">
                                <h3 className="text-center">Zeït Studio</h3>
                                <p className="mt-2"></p>
                            </div>
                        </div>

                        <div className="relative border border-[rgb(57,255,20)] rounded-lg overflow-hidden shadow-md">
                            <img src="YourImage.png" alt="Your Image" className="w-full h-72 object-cover" />
                            <div className="p-4 text-[rgb(57,255,20)]">
                                <h3 className="text-center">Your Project Title</h3>
                                <p className="mt-2">Your project description goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHub;
