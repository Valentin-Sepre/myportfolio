import React from 'react';
import Navbar from "../components/navbar";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <form className="w-full max-w-lg bg-black border border-[rgb(57,255,20)] p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-[rgb(57,255,20)] mb-8 text-center">Contactez-moi</h1>
                    <div className="mb-4">
                        <label className="block text-[rgb(57,255,20)] text-sm font-bold mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-black rounded-lg text-[rgb(57,255,20)] focus:outline-none focus:ring-2 focus:ring-[rgb(57,255,20)] border border-[rgb(57,255,20)]"
                            id="name"
                            type="text"
                            placeholder="Nom"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[rgb(57,255,20)] text-sm font-bold mb-2" htmlFor="surname">
                            Prénom
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-black rounded-lg text-[rgb(57,255,20)] focus:outline-none focus:ring-2 focus:ring-[rgb(57,255,20)] border border-[rgb(57,255,20)]"
                            id="surname"
                            type="text"
                            placeholder="Prénom"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[rgb(57,255,20)] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-black rounded-lg text-[rgb(57,255,20)] focus:outline-none focus:ring-2 focus:ring-[rgb(57,255,20)] border border-[rgb(57,255,20)]"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[rgb(57,255,20)] text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full px-3 py-2 bg-black rounded-lg text-[rgb(57,255,20)] focus:outline-none focus:ring-2 focus:ring-[rgb(57,255,20)] border border-[rgb(57,255,20)]"
                            id="message"
                            placeholder="Message"
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-[rgb(57,255,20)] text-black hover:bg-black hover:text-[rgb(57,255,20)] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border-[rgb(57,255,20)] border"
                            type="button"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
