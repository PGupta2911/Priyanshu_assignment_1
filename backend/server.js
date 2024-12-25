const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Hardcoded list of candidates
const candidates = [
    { id: 1, name: "Alice Johnson", skills: ["JavaScript", "React"], experience: 5 },
    { id: 2, name: "Bob Smith", skills: ["Java", "Spring"], experience: 8 },
    { id: 3, name: "Charlie Brown", skills: ["Python", "Django"], experience: 3 },
    { id: 4, name: "Diana Prince", skills: ["C++", "Qt"], experience: 7 },
    { id: 5, name: "Eve White", skills: ["Go", "Kubernetes"], experience: 2 },
    { id: 6, name: "Frank Castle", skills: ["Ruby", "Rails"], experience: 6 },
    { id: 7, name: "Grace Hopper", skills: ["C", "Assembly"], experience: 10 },
    { id: 8, name: "Hank Pym", skills: ["PHP", "Laravel"], experience: 4 },
    { id: 9, name: "Ivy Green", skills: ["Rust", "Wasm"], experience: 3 },
    { id: 10, name: "Jack Black", skills: ["Swift", "iOS"], experience: 5 }
];

// API endpoint to fetch candidates
app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
