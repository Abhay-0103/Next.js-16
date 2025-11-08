import React from 'react';
import Hello from "@/app/components/hello";  // Capitalized import

const Home = () => {
    return (
        <main>
            <div className="text-center">Welcome To Next.Js</div>
            <Hello />
        </main>
    );
};

export default Home;
