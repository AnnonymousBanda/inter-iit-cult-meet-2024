'use client';

import { useState, useEffect } from 'react';
import Celebration from '../../components/Celebration';
import { Footer, Loader } from '../../components';

const Podium = ({ topThree }) => {
    const podiumColors = ['bg-purple-400', 'bg-yellow-400', 'bg-blue-400'];

    return (
        <div className="flex justify-center items-end space-x-4 mb-10">
            <div
                className={`flex flex-col items-center justify-end p-4 rounded-lg shadow-lg text-white ${podiumColors[0]} h-48 w-[20rem]`}
            >
                <p
                    className="font-semibold mb-2"
                    dangerouslySetInnerHTML={{
                        __html: topThree[1].name.replace(/ /g, '&nbsp;'),
                    }}
                />
                <p className="font-bold">{topThree[1].score} pts</p>
                <div className="mt-4 text-2xl font-bold bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full">
                    2
                </div>
            </div>

            <div
                className={`flex flex-col items-center justify-end p-4 rounded-lg shadow-lg text-white ${podiumColors[1]} h-64 w-[30rem]`}
            >
                <p
                    className="font-semibold mb-2"
                    dangerouslySetInnerHTML={{
                        __html: topThree[0].name.replace(/ /g, '&nbsp;'),
                    }}
                />
                <p className="font-bold">{topThree[0].score} pts</p>
                <div className="mt-4 text-2xl font-bold bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full">
                    1
                </div>
            </div>

            <div
                className={`flex flex-col items-center justify-end p-4 rounded-lg shadow-lg text-white ${podiumColors[2]} h-44 w-[20rem]`}
            >
                <p
                    className="font-semibold mb-2"
                    dangerouslySetInnerHTML={{
                        __html: topThree[2].name.replace(/ /g, '&nbsp;'),
                    }}
                />
                <p className="font-bold">{topThree[2].score} pts</p>
                <div className="mt-4 text-2xl font-bold bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full">
                    3
                </div>
            </div>
        </div>
    );
};

const Standings = ({ standings }) => {
    return (
        <div className="max-w-[60vw] mx-auto my-10 p-4">
            <div className="space-y-6">
                {standings.map((player, index) => {
                    if (index < 3) return null;
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between p-6 rounded-lg shadow-md text-white hover:scale-105 transition-transform duration-500 cursor-pointer bg-gray-700 w-full"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl font-bold bg-gray-800 w-16 h-16 flex items-center justify-center rounded-full">
                                    {index + 1}
                                </div>
                                <p
                                    className="font-semibold"
                                    dangerouslySetInnerHTML={{
                                        __html: player.name.replace(
                                            / /g,
                                            '&nbsp;'
                                        ),
                                    }}
                                />
                            </div>
                            <p className="font-medium">{player.score} pts</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Leaderboard = () => {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const res = await fetch(
                    'https://script.google.com/macros/s/AKfycbxKy1v2po-7xR-0YoqYS48NMTN3rXSsUiWAyvW43sk10XdBUXDzIV8hkaVAksFt_8hP9w/exec'
                );
                const data = (await res.json()).data.slice(1);
                setStandings(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStandings();
    }, []);

    return (
        <>
            <main className="w-full min-h-screen py-[12rem] bg-backGround">
                <div className="max-container">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <Celebration />
                            <h2 className="font-extrabold text-[6rem] text-center text-gray-800 mb-8">
                                Leaderboard
                            </h2>
                            <Podium topThree={standings.slice(0, 3)} />
                            <Standings standings={standings} />
                        </>
                    )}
                </div>
            </main>
            <Footer bgcolor="#F4F7FE" />
        </>
    );
};

export default Leaderboard;
