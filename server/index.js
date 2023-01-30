const express = require('express')
const app = express()
const PORT = 8181;
const {exec, execFile} = require('child_process');

// Singularity 

app.get('/replications', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    execFile(`/bin/cat`, ["samples/replications-list.json"], (error, stdout, stderr) => {
        res.send(JSON.stringify(JSON.parse(stdout)));
    })
})

app.get('/replication/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    execFile(`/bin/cat`, ["samples/replication-63cfc9708795ad5b46ffb7fe.json"], (error, stdout, stderr) => {
        res.send(JSON.stringify(JSON.parse(stdout)));
    })
})

// Lotus

app.get('/chainheight', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    execFile(`/bin/cat`, ["samples/lotus.ChainHead.json"], (error, stdout, stderr) => {
        res.send(JSON.stringify(JSON.parse(stdout)));
    })
})

// Retrieval

app.get('/ls/*', (req, res) => {
    console.log(`fil-ls. path param: ${req.params[0]}`);
    res.setHeader('Content-Type', 'application/json');
    execFile(`/bin/cat`, ["samples/fil-ls.json"], (error, stdout, stderr) => {
        res.send(JSON.stringify(JSON.parse(stdout)));
    })
})

app.get('/cp/*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    execFile(`/bin/cat`, ["samples/fil-ls.json"], (error, stdout, stderr) => {
        res.send(`FILE CONTENT TODO. Path: ${req.params[0]}`);
    })
})

app.get('/', (req, res) => {
    res.send('')
})

app.listen(PORT, () => {
    console.log(`Filecoin Storage Gateway Service listening on port ${PORT}`)
})
