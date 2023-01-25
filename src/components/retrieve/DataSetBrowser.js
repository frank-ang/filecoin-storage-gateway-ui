import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FullFileBrowser, ChonkyActions, setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

function DataSetBrowser({datasetId}) {

    const LS_API_PATH = '/ls/';
    const [path, setPath] = useState('');
    const [fileList, setFileList] = useState([]);

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
            .then(function(myJson) {
                console.log(myJson);
                setFileList(myJson);
            });
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
                            <FullFileBrowser files={staticDemoFiles} folderChain={folderChain} />
                        </div>

<pre>
datasetId: [{datasetId}], path: [{path}], fileList: [{JSON.stringify(fileList)}]
</pre>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );

}

export default DataSetBrowser;
