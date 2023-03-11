import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./css/commun.css";
import NotFound from "./modules/errors";
import TimeComponent from './modules/playingWithTime';
import RenderFella from './modules/SharkFellaCss';
import RenderFellaTest from './modules/SharkFellas';
import MovingImage from './modules/keyframesTest';
import { Species, SpeciesList } from './modules/species.js';
import dancer from './pics/cute_shark.png';


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/sharks/:id" element={<Species />} />
                    <Route exact path="/sharks" element={<SpeciesList />} />
                    <Route exact path="/habitat" element={<RenderFellaTest imageUrl={dancer} />} />
                    <Route exact path="/aquarium" element={<><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /><RenderFella imageUrl={dancer} /></>} />
                    <Route exact path="/timetest" element={<TimeComponent imageUrl={dancer}/>} />
                    <Route exact path="/testframes" element={<MovingImage/>} />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
