import Link from 'next/link';
import { Card, Navbar, Stairs } from '../../components';

const page = () => {
    const data = [
        {
            name: 'Ankit Bhagat',
            por: 'Events Commitee',
            image: 'background.jpg',
            number: '123456789',
            linkedin: 'https://www.linkedin.com/in/ankit-bhagat-1b1b3b1b1/',
            mail: 'mailto:ankitbhagat@gmail.com',
        },
        {
            name: 'Vinay Khedkar',
            por: 'Events Commitee',
            image: 'background.jpg',
            number: '123456789',
            linkedin: 'https://www.linkedin.com/in/vinay-khedkar-1b1b3b1b1/',
            mail: 'mailto:vinay@gmail.com',
        },
        {
            name: 'Siddharth Singh',
            por: 'Events Commitee',
            image: 'background.jpg',
            number: '123456789',
            linkedin: 'https://www.linkedin.com/in/siddharth-singh-1b1b3b1b1/',
            mail: 'mailto:siddharth@gmail.com',
        },
        {
            name: 'Shivam Sharma',
            por: 'Events Commitee',
            image: 'background.jpg',
            number: '123456789',
            linkedin: 'https://www.linkedin.com/in/shivam-sharma-1b1b3b1b1/',
            mail: 'mailto:shivam@gmail.com',
        },
    ];
    return (
        <main className="w-full bg-backGround py-[12rem]">
            <div className="max-container lg:w-2/3 w-full h-full min-h-screen py-[3rem] pl-[5rem] flex flex-col gap-[3rem]">
                <h1 className="font-bold text-[4rem] tracking-tight uppercase">
                    Contact Us
                </h1>
                <h2 className="font-bold text-[3rem] text-slate-900 ">
                    Organising Commitee
                </h2>
                <div className="flex flex-col items-center gap-[3rem] md:flex-row md:flex-wrap justify-center">
                    {data.map((item) => (
                        <Card
                            key={item.name}
                            name={item.name}
                            por={item.por}
                            image={item.image}
                            number={item.number}
                            mail={item.mail}
                            link={item.linkedin}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-[2rem]">
                    <h2 className="font-bold text-[3rem]">Address</h2>
                    <p className="text-[2.5rem] text-slate-900 pl-[2rem]">
                        Gymkhana, IIT Patna, Bihta, Bihar - 801106
                    </p>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    <h2 className="font-bold text-[3rem]">Phone</h2>
                    <ul className="pl-[2rem] list-disc list-inside gap-[2rem]">
                        <li>
                            <p className="text-[2.5rem] text-slate-900">
                                Event Organiser - +91&nbsp;1234567890
                            </p>
                        </li>
                        <li>
                            <p className="text-[2.5rem] text-slate-900">
                                Event Organiser - +91&nbsp;1234567890
                            </p>
                        </li>
                        <li>
                            <p className="text-[2.5rem] text-slate-900">
                                Event Organiser - +91&nbsp;1234567890
                            </p>
                        </li>
                        <li>
                            <p className="text-[2.5rem] text-slate-900">
                                Event Organiser - +91&nbsp;1234567890
                            </p>
                        </li>
                        <li>
                            <p className="text-[2.5rem] text-slate-900">
                                Event Organiser - +91&nbsp;1234567890
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    <h2 className="font-bold text-[3rem]">Email</h2>
                    <Link
                        href="mailto:gymkhama@iitp.ac.in"
                        className="text-[2.5rem] text-slate-900 pl-[2rem]"
                    >
                        gymkhana@iitp.ac.in
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default page;
