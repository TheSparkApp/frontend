import React from 'react';

type Params = {
    params: {
        groupId?: string;
    };
};

export default function GroupPage({ params }: Params) {
    const { groupId } = params;

    if (!groupId) {
        return <div>Fehler: Keine Group-ID angegeben.</div>;
    }

    return (
        <div>
            <h1>Gruppe mit ID: {groupId} wird geladen</h1>
        </div>
    );
}
