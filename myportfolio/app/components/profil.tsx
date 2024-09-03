"use client"
import React, { useRef } from 'react';

const Profil = () => {
    const skillsRef = useRef<HTMLDivElement>(null);

    const scrollToSkills = () => {
        if (skillsRef.current) {
            const { offsetTop, scrollHeight } = skillsRef.current;
            const bottomPosition = offsetTop + scrollHeight;

            window.scrollTo({ top: bottomPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex items-center space-x-8 p-8 rounded-lg shadow-lg">
                <img className="w-72 rounded-full border-2 border-[rgb(57,255,20)]" src="/Sujet.png" alt="Sujet" />
                <div className="text-left flex flex-col items-center justify-center">
                    <h2 className="text-[rgb(57,255,20)] text-3xl font-bold mb-5">Baby Developer</h2>
                    <p className='text-[rgb(57,255,20)] text-lg'>
                        Jeune rookie dans le milieu du développement, curieux et déterminé !
                    </p>
                    <div className="mt-5">
                        <button
                            onClick={scrollToSkills}
                            className="px-6 py-3 bg-[rgb(57,255,20)] text-black hover:bg-black hover:text-[rgb(57,255,20)] font-bold rounded-lg border-[rgb(57,255,20)] border"
                        >
                            Mes Skills
                        </button>
                    </div>
                </div>
            </div>
            <div ref={skillsRef}>
            </div>
        </div>
    );
};

export default Profil;