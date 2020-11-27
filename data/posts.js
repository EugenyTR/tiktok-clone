import Nepoh from "../src/assets/images/nepochodnica.png";
import KingaGlyk from "../src/assets/video/Kinga-Glyk.webm";
import Nepochodnica from "../src/assets/video/nepochodnica.mp4";
import {nepoch} from "../src/assets/images/nepochodnica.png";

export default [
    {
        id: 1,
        user: {
            id: 'u1',
            username: 'Kinga Glyk',
            userImage: nepoch,
            userVideo: KingaGlyk,
        },
        description: 'Талантливая композитор и исполнительница. Владеющая филигранной тенкой игры на басс-гитаре',
        songName: 'Неизвестная',
        songImage: '',
        likes: 123,
        comments: 12,
        shares: 44,
    },

    {
        id: 2,
        user: {
            id: 'u2',
            username: 'Непоходница',
            userImage: nepoch,
            userVideo: Nepochodnica,
        },
        description: 'Талантливый человек, который открывает зрителям новые грани природы Сибири.',
        songName: 'Самоизоляция',
        songImage: '',
        likes: 123,
        comments: 12,
        shares: 44,
    }
]
