const animate = ({timing, draw, duration,}) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        //timeFraction изменятется от 0 до 1 
        let timeFraction = (time - start) / duration; 
        if (timeFraction > 1) timeFraction = 1;

        // вычесление текущего состояния анимации 
        let progress = timing(timeFraction);

        draw(progress); // отрисовать ее 

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });

};

export default animate; 