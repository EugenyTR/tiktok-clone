import React, { useState } from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from "./styles";

const Post = () => {
    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{ uri: "https://r1---sn-ov8vuxaxjvh-v8cl.googlevideo.com/videoplayback?expire=1605631057&ei=8aezX_CEBMrn7QTeqoigDA&ip=37.193.7.204&id=o-AJ-mm3TFTfB402_Ib67qJxkZdq-eH7oo8fJg3gHAmy7z&itag=18&source=youtube&requiressl=yes&mh=YI&mm=31%2C29&mn=sn-ov8vuxaxjvh-v8cl%2Csn-bvvbax-v8cz&ms=au%2Crdu&mv=m&mvi=1&pl=16&nh=%2CEAo&initcwndbps=1917500&vprv=1&mime=video%2Fmp4&ns=Ym9kxzPZR6Nenb4Pbwnv6MsF&gir=yes&clen=9676929&ratebypass=yes&dur=123.739&lmt=1577792953526802&mt=1605602219&fvip=1&c=MWEB&txp=5531432&n=edhsEaKRWmqmww&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgK7ZRCAX5um7STq79_Scdmr_sUKUrNA3t4hGf2UPE1GICIDVIGSgJ3Hesvra9ac5cYEE8B9VutOX9hs1BFF6rd-jv&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cnh%2Cinitcwndbps&lsig=AG3C_xAwRQIhANBPItvjDSBrq4aT1iVKTws5rqP-_iSQoo07-fr1xAHiAiBbsgnTnOuNLe-hH-Egv2xbXOhboLSfwccNHmZ4-FC5Ng%3D%3D&cpn=d0B0wYYs30O-uKq-&cver=2.20201114.07.00&ptk=youtube_single&oid=aJE3BFC_PvySpqThZDuPoA&ptchn=XzSbpahwAPhmjIp_13ijlw&pltype=content" }}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Post;
