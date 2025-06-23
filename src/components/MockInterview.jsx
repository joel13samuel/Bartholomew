import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MockInterview = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();

    const handleEnd = () => {
        navigate('/problems');
    };

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'left' }}>
            <h2>Mock Interview</h2>
            <p>Problem ID: {problemId}</p>
            {/* You can add more problem details here later */}
            <button onClick={handleEnd} style={{ marginTop: '2rem', padding: '0.5rem 1.2rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
                End
            </button>
        </div>
    );
};

export default MockInterview;
