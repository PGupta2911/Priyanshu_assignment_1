import React from 'react';

const CandidateTable = ({ candidates }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Years of Experience</th>
                </tr>
            </thead>
            <tbody>
                {candidates.map(candidate => (
                    <tr key={candidate.id}>
                        <td>{candidate.name}</td>
                        <td>{candidate.skills.join(', ')}</td>
                        <td>{candidate.experience}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CandidateTable;
