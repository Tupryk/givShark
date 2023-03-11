import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Species() {

    const [shark, setShark] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/sharks/${id}`)
            .then(response => response.json())
            .then(data => setShark(data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <>
            <div class="entry">
                <div class="basic_info">
                    <a class="name" href="/species">10. Basking Shark (Cetorhinus maximus)</a>
                    <p>- Comun name: {shark.comun_name}.</p>
                    <p>- Scientific name: {shark.science_name}.</p>
                    <p>- Average weight: {shark.weight}kg.</p>
                </div>
                <img alt="shark species" src={shark.photo} />
            </div>
        </>
    );
}

export function SpeciesList() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api/sharks").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <>
            {(backendData === undefined) ? (
                <p>Loading...</p>
            ) : (
                backendData.map((shark, i) => (
                    <>
                        <div class="entry" key={i}>
                            <div class="basic_info">
                                <a class="name" href="/species">10. Basking Shark (Cetorhinus maximus)</a>
                                <a href="/shark/{shark._id}">{shark.comun_name}</a>
                                <p>- Comun name: {shark.comun_name}.</p>
                                <p>- Scientific name: {shark.science_name}.</p>
                                <p>- Average weight: kg.</p>
                            </div>
                            <img alt="shark species" src={shark.photo} />
                        </div>
                    </>
                ))
            )}
        </>
    );
}

const utils = { SpeciesList, Species }
export default utils;
