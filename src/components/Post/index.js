import React, { useState } from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import Video from 'react-native-video';
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Post = (props) => {
    const { post } = props;

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video
                        source={post.user.userVideo}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />

                <View style={styles.uiContainer}>
                    <View style={styles.rightContainer}>
                        <Image style={styles.profilePicture} sourse={{ uri: post.user.userImage }} />
                            <View style={styles.iconContainer}>
                                <AntDesign name={"heart"} size={40} color='white' />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={"commenting"} size={40} color='white' />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Entypo name={"share"} size={40} color='white' />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View>
                            <Text style={styles.handle}>@{post.user.username}</Text>
                            <Text style={styles.description}>{post.description}</Text>

                            <View style={styles.songRow}>
                                <Entypo name={"beamed-note"} size={18} color='white' />
                                <Text style={styles.songName}>{post.songName}</Text>
                                <Image
                                    style={styles.songImage}
                                    sourse={{ uri: post.songImage }}
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Post;
