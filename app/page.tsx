import React from 'react';
import Hello from "@/components/hello";  // Capitalized import

const Home = () => {
    return (
        <main>
            <div className="text-center text-2xl">Welcome To Next.Js</div>
            <Hello />
        </main>
    );
};

export default Home;
