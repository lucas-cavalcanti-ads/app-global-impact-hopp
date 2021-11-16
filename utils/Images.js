const images = {     
    'logo-hopp': require('../assets/img/logo-hopp.png'),    
};

export default function getImage(image) { 
    return images[image]; 
}