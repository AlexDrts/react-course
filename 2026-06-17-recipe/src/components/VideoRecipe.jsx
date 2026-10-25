import "./VideoRecipe.css";

function VideoRecipe() {

    return (

        <div className="video">

            <h2>Відеорецепт</h2>

            <iframe
                width="700"
                height="400"
                src="https://www.youtube.com/embed/3AAdKl1UYZs"
                title="Carbonara"
                allowFullScreen
            ></iframe>

        </div>

    );

}

export default VideoRecipe;