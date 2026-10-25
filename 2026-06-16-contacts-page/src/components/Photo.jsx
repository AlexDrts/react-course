import './Photo.css';
import photo from '../assets/myphoto.jpg';

function Photo() {
    return (
        <div className="photo">
            <img src={photo} alt="Моє фото" />
        </div>
    );
}

export default Photo;