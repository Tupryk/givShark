import React, { useRef, useEffect, useMemo } from 'react';


function RenderFellaTest({ imageUrl }) {
    const canvasRef = useRef(null);
    
    const image_width = 128; // Shoud be influenced by actual size of shark
    const image_height = 100;
    const image = useMemo(() => {
        const img = new Image();
        img.src = imageUrl;
        return img;
    }, [imageUrl]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let dx = 0;
        let dy = 0;
        let radius = image_height / 2;

        let intervalCounter = 0;
        let intervalLimit = 100;
        let intervalMaxLimit = 500;

        let direction = { x: 1, y: 0 };

        let moving = true;
        let flipped = false;

        let wable = 0;
        let wable_amplitud = 0.07;
        let wable_speed = 0.07;
    
        function drawFella() {
            let vis_w = image_width;
            let vis_h = ( image_height * (1-Math.abs( Math.sin(wable)*wable_amplitud+(1-wable_amplitud) )) ) + ( image_height*(1-wable_amplitud) );
            let vis_x = x - image_width / 2;
            let vis_y = y - (image_width / 2) + image_height - vis_h;

            if (flipped) {
                ctx.save();
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.scale(-1, 1);
                ctx.drawImage(image, -vis_x + (canvas.width / 2) - image_width, vis_y - canvas.height / 2, vis_w, vis_h);
                ctx.restore();
            } else {
                ctx.drawImage(image, vis_x, vis_y, vis_w, vis_h);
            }
        }
    
        function updateBallPosition() {
            intervalCounter++;
            wable += wable_speed;

            if ((moving && intervalCounter >= intervalLimit) || (!moving && intervalCounter >= intervalLimit*0.5)) {
                intervalCounter = 0;
                intervalLimit = intervalMaxLimit * Math.random();
                moving = !moving;
                direction = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
                dx = direction.x;
                dy = direction.y;
                if (moving) {
                    if (dx < 0) flipped = false;
                    else flipped = true;
                }
            }
            if (moving) {

                if (x + dx > canvas.width - radius || x + dx < radius)
                    dx = -dx;
                if (y + dy > canvas.height - radius || y + dy < radius)
                    dy = -dy;
                x += dx;
                y += dy;
            }
        }
    
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFella();
            updateBallPosition();
            requestAnimationFrame(animate);
        }
    
        animate();
    }, [imageUrl, image]);
    
    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
}

export default RenderFellaTest;
