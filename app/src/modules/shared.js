import React from 'react';
import '../css/components.css';

class Banner extends React.Component {
    render() {
        return (
            <div class="top_nav">
                <div class="top_side">
                    <div class="top_block">
                        <a class="top_link" href="/species">Species</a>
                    </div>
                    <div class="top_block">
                        <a class="top_link" href="/anatomy">Anatomy</a>
                    </div>
                </div>
                <div class="top_block">
                    <a href="/"><h1 class="title">ICANHAZSHARK.COM</h1></a>
                </div>
                <div class="top_side">
                    <div class="top_block">
                        <a class="top_link" href="/conservation">Conservation</a>
                    </div>
                    <div class="top_block">
                        <a class="top_link" href="/community">Community</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
