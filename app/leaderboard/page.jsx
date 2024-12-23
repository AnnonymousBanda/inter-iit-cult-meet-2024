import React from 'react';
import Celebration from '../../components/Celebration';

const Podium = ({ topThree }) => {
    const podiumColors = ['bg-orange-400', 'bg-yellow-400', 'bg-pink-400'];

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
    const standings = [
        { name: 'John Doe', score: 100 },
        { name: 'Jane Doe', score: 90 },
        { name: 'Alice', score: 80 },
        { name: 'Bob', score: 70 },
        { name: 'Charlie', score: 60 },
        { name: 'David', score: 50 },
        { name: 'Eve', score: 40 },
        { name: 'Frank', score: 30 },
        { name: 'Grace', score: 20 },
        { name: 'Heidi', score: 10 },
    ];``

    return (
        <main className="w-full min-h-screen py-[12rem] bg-backGround">
            <div className="max-container">
                <Celebration />
                <h2 className="font-extrabold text-[6rem] text-center text-gray-800 mb-8">
                    Leaderboard
                </h2>
                <Podium topThree={standings.slice(0, 3)} />
                <Standings standings={standings} />
            </div>
        </main>
    );
};

export default Leaderboard;
