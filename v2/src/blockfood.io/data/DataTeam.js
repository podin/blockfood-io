import imageConrad from '../style/images/team/Photo_Conrad_bf.png'
import imagePauline from '../style/images/team/Photo_Pauline_bf.png'
import imageJulien from '../style/images/team/Photo_Julien_bf.png'
import imageDavid from '../style/images/team/Photo_David_bf.png'
import imageRomain from '../style/images/team/Photo_Romain_bf.png'
import imageNazy from '../style/images/team/Photo_Nazy_bf.png'
import imageMokhtar from '../style/images/team/Photo_Mokhtar_bf.png'
import imageVincent from '../style/images/team/Photo_Vincent_bf.png'
import imageDewan from '../style/images/team/Photo_Dewan_bf.png'

import imageFr from '../style/images/countries/fr.png'
import imageUk from '../style/images/countries/uk.png'
import imageIran from '../style/images/countries/iran.png'
import imageAlg from '../style/images/countries/alg.png'
import imageKr from '../style/images/countries/kr.png'

const fr = {label: 'France', image: imageFr}
const uk = {abel: 'United Kingdom', image: imageUk}
const iran = {label: 'Iran', image: imageIran}
const alg = {label: 'Algeria', image: imageAlg}
const kr = {label: 'South Korea', image: imageKr}

export default [
    {
        image: imageConrad,
        name: 'Conrad Lelubre',
        country: fr,
        role: 'Founder & CEO',
        description: 'Software Engineer from the Grenoble Institute of Technology, Conrad has worked for 8 years in the software industry as Scrum Master, Technical Leader and Architect. Passionate about his work, he is always looking for new opportunities on how to have a better impact on the world. He also loves bicycles and cats.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/conradlelubre/'}
        ]
    },
    {
        image: imagePauline,
        name: 'Pauline Sicoit',
        country: fr,
        role: 'Project Manager',
        description: 'Multi-talented, half ambidextrous 24 year-old woman from Grenoble, Pauline works as a project manager with the following motto: if there is no solution, there is no issue. Eternal dreamer and tireless traveller, she plans to put her feet on each country to inspire her and improve herself continuously. She is very excited by the big challenge BlockFood represents and looks forward to have the best impact possible on the economy to make it fairer.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/pauline-sicoit-83ab57109/'}
        ]
    },
    {
        image: imageJulien,
        name: 'Julien Leroy',
        country: fr,
        role: 'CEO Advisor',
        description: 'Julien has ten years of experience behind him in a number of different companies and in various domains. His acute vision of how a company works with its context is of great help when it comes to make important decisions.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/leroyjulien/'}
        ]
    },
    {
        image: imageDavid,
        name: 'David Twigger',
        country: uk,
        role: 'Lead Developer',
        description: 'David is currently a freelance developer between Grenoble and Lyon. He has worked in many different companies and types of structures before finally deciding, like Hans, to try flying solo (he also has a terrible sense of humor). He loves all things IT, from programming microchips to developing full blown applications.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/david-twigger-b57856120/'}
        ]
    },
    {
        image: imageRomain,
        name: 'Romain Destenay',
        country: fr,
        role: 'Data Scientist',
        description: 'Big Data Engineer from the Grenoble Institute of Technology, Romain has worked as a computer vision researcher in South-Korea and recently in a start-up working on power forecast for renewables. He is also deeply invested in the Effective Altruism movement and wish to have the maximum positive impact with his time and money.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/romaindestenay/'}
        ]
    },
    {
        image: imageNazy,
        name: 'Nazanin Ahmadi Torshizi',
        country: iran,
        role: 'Full Stack Developer',
        description: 'Nazanin is a skilled full stack developer, with a passion for great user experiences and good-looking applications. She loves learning new things, traveling the world (Italy especially), being amazed at what humans are capable of and impress other humans with what she is able to do.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/nazanin-a-torshizi-a8616aa5/'}
        ]
    },
    {
        image: imageMokhtar,
        name: 'Mokhtar Mial',
        country: alg,
        role: 'Full Stack Developer',
        description: 'Mokhtar is a young but talented full stack developer. With an already deep knowledge of full stack development despite his lack of experience, he loves growing through challenges such as BlockFood. He is currently studying for his Master in Computer Science. Blockchain technology sparked his interest in 2015 and he has been part of the community since then.',
        links: [
            {type: 'linkedin', url: 'https://www.linkedin.com/in/mokhtarmial/'}
        ]
    },
    {
        image: imageVincent,
        name: 'Vincent Gouesbet',
        country: fr,
        role: 'Blockchain Analyst',
        description: 'Vincent is passionate about blockchain. He is very active in blockchain communities and he loves to dive deep in the way blockchain works.',
        links: []
    },
    {
        image: imageDewan,
        name: 'Dewan Suh',
        country: kr,
        role: 'Designer',
        description: 'Dewan is a self-taught Graphic designer since personal computer advent. Making illustrations for medical fields, sprites for games, assets for applications, animations for shows, 3D for architecture. He is now eager to serve a project with a social equity purpose.',
        links: []
    }
]