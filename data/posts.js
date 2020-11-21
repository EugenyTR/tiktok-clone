import Nepoh from "../src/assets/images/nepochodnica.png";
import KingaGlyk from "../src/assets/video/Kinga-Glyk.webm";
import Nepochodnica from "../src/assets/video/nepochodnica.mp4";

export default [
    {
        id: 1,
        user: {
            id: 'u1',
            username: 'Kinga Glyk',
            userImage: Nepoh,
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
            userImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpoiskputi.ru%2Fassets%2Fimages%2F3382%2Fava%2Fsmall-5c71a235730a6.jpg&imgrefurl=https%3A%2F%2Fpoiskputi.ru%2Fcompanions%2F3382.html&tbnid=1c5dRT-CzEV6TM&vet=12ahUKEwig6Lvd8pLtAhUgBxAIHXlRBB4QMygQegUIARCxAQ..i&docid=mOSfjcz_VzedoM&w=200&h=200&q=%D0%BD%D0%B5%D0%BF%D0%BE%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D1%86%D0%B0&ved=2ahUKEwig6Lvd8pLtAhUgBxAIHXlRBB4QMygQegUIARCxAQ',
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
