import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FullFileBrowser, ChonkyActions, setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

function DataSetBrowser({datasetId}) {

    setChonkyDefaults({
        iconComponent: ChonkyIconFA,
        disableSelection: true,
        disableDragAndDropProvider: true,
        defaultFileViewActionId: ChonkyActions.EnableListView.id,
    });

    useEffect(() => {
      }, [datasetId]);

    const files = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
        },
    ];
    const folderChain = []; //  [{ id: 'xcv', name: 'Parent', isDir: true }];

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
                            <FullFileBrowser files={files} folderChain={folderChain} />
                        </div>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );

}

export default DataSetBrowser;
