import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FullFileBrowser, ChonkyActions, setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

function DataSetBrowser({datasetId}) {

    const LS_API_PATH = '/ls/';
    const [path, setPath] = useState('');
    const [browserFileList, setBrowserFileList] = useState([]);

    const staticDemoFiles = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
        },
    ];
    const folderChain = []; //  [{ id: 'xcv', name: 'Parent', isDir: true }];

    setChonkyDefaults({
        iconComponent: ChonkyIconFA,
        disableSelection: true,
        disableDragAndDropProvider: true,
        defaultFileViewActionId: ChonkyActions.EnableListView.id,
    });

    useEffect(() => {
        console.log(`DataSetBrowser useEffect(), datasetId: ${JSON.stringify(datasetId)}`);
        ls()
    }, [datasetId]);

    function ls() {
        console.log(`ls(), path:${path}`);
        fetch(`${LS_API_PATH}`, { method: 'GET' })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(apiFileList) {
                initBrowserFileList(apiFileList);
            })
    }

    function initBrowserFileList(apiFileList) {
        var browserFileList = [];
        apiFileList.forEach(function(apiFile) {
            browserFileList.push({
                id: apiFile.name,
                name: apiFile.name,
                isDir: false, // TODO conditional.
                size:apiFile.size,
                parentId:"TODO...what.is.this for? remove it?",
            });
        });
        console.log(`setting browser file list: ${JSON.stringify(browserFileList)}`);
        setBrowserFileList(browserFileList);
    }

    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>
                    Data Set Browser
                </Card.Header>
                <Card.Body>
                    <Container fluid="true">
                        <div style={{ height: 300 }}>
                            <FullFileBrowser files={browserFileList} folderChain={folderChain} />
                        </div>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DataSetBrowser;
