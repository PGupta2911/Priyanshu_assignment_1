import React, { useEffect, useState } from 'react';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [candidates, setCandidates] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/api/candidates')
            .then(response => response.json())
            .then(data => setCandidates(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const filteredCandidates = candidates.filter(candidate => 
        candidate.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div>
            <h1>Candidate List Viewer</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <CandidateTable candidates={filteredCandidates} />
        </div>
    );
};

export default App;
