import {useState} from "react";

export function useNextId(maxId) {

    const [id, setId] = useState(maxId);

    function nextId(p) {
        setId(id+1 );
    }

    return [nextId, nextId];
}
