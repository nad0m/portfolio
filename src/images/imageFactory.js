import videosearch from './video-search.png';
import imagesearch from './image-search.png';
import pomodoro from './pomodoro.jpg';
import simon from './simon.jpg';
import wikipedia from './wikipedia.png';
import barcode from './barcode.png';
import cataclysm from './cataclysm.jpg'
import portfolio from './portfolio.png';
import tictactoe from './tictactoe.jpg';
import fever from './fever.png';
import vital from './vital.png';
import yahoo from './yahoo.png';

export default (image) => {
    switch(image) {
        case 'yahoo.png':
            return yahoo;
        case 'video-search.png':
            return videosearch;
        case 'image-search.png':
            return imagesearch;
        case 'pomodoro.jpg':
            return pomodoro;
        case 'simon.jpg':
            return simon;
        case 'wikipedia.png':
            return wikipedia;
        case 'barcode.png':
            return barcode;
        case 'cataclysm.jpg':
            return cataclysm;
        case 'portfolio.png':
            return portfolio;
        case 'tictactoe.jpg':
            return tictactoe;
        case 'fever.png':
            return fever;
        case 'vital.png':
            return vital;
        default:
            return 'https://react.semantic-ui.com/images/wireframe/image.png';

    }
}