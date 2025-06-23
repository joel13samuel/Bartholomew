import React from 'react';
import { useNavigate } from 'react-router-dom';

const problems = [
    { id: 1, title: 'Two Sum' },
    { id: 2, title: 'Reverse Linked List' },
];

const ProblemsPage = () => {
    const navigate = useNavigate();

    const handleStartMock = (problemId) => {
        navigate(`/mockinterview/${problemId}`);
    };

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'left' }}>
            <h2>Problems</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {problems.map((problem) => (
                    <li key={problem.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{problem.title}</div>
                        <button onClick={() => handleStartMock(problem.id)} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
                            Start Mock Interview
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProblemsPage;
