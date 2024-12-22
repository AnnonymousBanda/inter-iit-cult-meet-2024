import { Card, Navbar, Stairs } from '../../components';

const page = () => {
    return (
        <Stairs>
            <main className="w-full bg-white">
                <Navbar />
                <div className="max-container h-screen">
                    <h1 className="font-normal">Contact Us</h1>
                    <Card name="Ankit Bhagat" por="Coder" />
                </div>
                ;
            </main>
        </Stairs>
    );
};

export default page;
