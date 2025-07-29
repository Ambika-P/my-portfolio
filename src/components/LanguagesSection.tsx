import React from 'react';

const LanguagesSection = () => {
    return (
        <section id="languages" className="reveal py-12 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Languages Known</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>English:</strong> Working proficiency</li>
                <li><strong>Hindi:</strong> Basic understanding</li>
                <li><strong>Konkani:</strong> Native (mother tongue)</li>
                <li><strong>Tulu:</strong> Native fluency</li>
                <li><strong>Kannada:</strong> Native fluency</li>
            </ul>
        </section>
    );
};

export default LanguagesSection;
