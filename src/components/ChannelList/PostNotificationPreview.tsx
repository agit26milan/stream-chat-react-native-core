import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MemoIc_arrow_down_vote_on from './assets/Ic_downvote_on';
import MemoIc_arrow_upvote_on from './assets/Ic_upvote_on';
import MemoIc_comment from './assets/Ic_comment';
import MemoIc_block_inactive from './assets/Ic_block_inactive';
import { useTheme } from '../../contexts/themeContext/ThemeContext';
import { calculateTime } from 'stream-chat-react-native-core/src/components/ChannelList/customUtils';
import Imageblock from './assets/images/block.png'
import ButtonHighlight from '../ChannelPreview/ButtonHighlight'
import {Avatar} from '../Avatar/Avatar'
import FeedIcon from './assets/images/feed-icon.png'
const styles = StyleSheet.create({
    containerCard: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingVertical: 12,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    avatarContainer: {
        marginRight: 0,
    },
    titleText: {
        // fontWeight: 'bold',
        flex: 1,
        fontSize: 12,
        flexShrink: 1,
    },
    lastContentContainer: {
        marginLeft: 'auto',
        backgroundColor: 'red',
     
    },
    titleContainer: {
        maxWidth: '70%',
    },
    subtitleStyle: {
        // color: '#6A6A6A',
        flex: 1,
        // marginTop:3,
        fontSize: 12,
        // flexShrink: 1,
    },
    descriptionContainer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        paddingLeft: 12,
    },
    row: {
        flexDirection: 'row',
    },
    avatarNoHeight: {
        width: 40
    },
    centerAlign: {
        alignItems: 'center'
    },
    mr10: {
        marginRight: 15
    },
    textVoteMargin: {
        marginRight: 0,
        width: 30
    },
    dateFont: {
        fontSize: 12,
        marginLeft: 'auto'
    },
    titleTextBig: {
        fontSize: 14,
        fontWeight: '700'
    },
    iconMargin: {
        marginRight: 5
    },
    replyContainer: {
        flexDirection: 'row',
        marginTop: 3,
    },
    iconStyle: {
        height: 12, width: 12,
    },
    iconContainerStyle: {
        backgroundColor:'#55C2FF'
    },
    typeContainer: {
        height: 24,
        width: 24,
        backgroundColor: '#55C2FF',
        borderRadius: 12,
        position: 'absolute',
        bottom: -6,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor: 'white'
    }
})

type ItemChildren = {
    comments: CommentsChildren,
    postMaker: PostMakerChildren,
    titlePost:string,
    upvote: number,
    downvote: number,
    block:number,
    isAnonym: boolean,
    data:DataDateProps
}

type DataDateProps = {
    updated_at:string,
    last_message_at:string
}

type CommentsChildren = {
    actor:object,
    length: number
}

type PostMakerChildren = {
    data: PostMakerDataChildren,
    id: string
}

type PostMakerDataChildren = {
    profile_pic_url:string,
    username:string
}

type PontNotfifcationPreviewProps = {
    context:ContextChildren,
    item:ItemChildren,
    onSelectAdditionalData: (item:object) => void,
    showBadgePostNotif?:boolean,
    countPostNotif?:React.ReactNode
}

type ContextChildren = {
    profile: object[]
}


type DetailProfile = {
    myProfile?: MyProfileChildren
}

type MyProfileChildren = {
    user_id: string
}



const PostNotificationPreview : React.FC<PontNotfifcationPreviewProps> = ({item, context, onSelectAdditionalData, showBadgePostNotif, countPostNotif}) => {
    const [profile] = context.profile
    const {
        theme: {
          channelPreview: { container, contentContainer, row, title },
          colors: { border, white_snow, grey },
        },
      } = useTheme();
    
    const {myProfile} : DetailProfile = profile
    const handleReplyComment = () => {
        const actorId = item.comments[0] && item.comments[0].actor && item.comments[0].actor.data && item.comments[0].actor.id
        const {myProfile} : DetailProfile = profile
        if(actorId === myProfile.user_id && !item.isAnonym) {
            return "You"
        } else if(item.comments[0] && item.comments[0].reaction && item.comments[0].reaction.parent !== "" && !item.isAnonym) {
            return `${item.comments[0] 
                && item.comments[0].actor 
                && item.comments[0].actor.data 
                && item.comments[0].actor.data.username} Replied to your comment`
        }
        else {
            if(!item.isAnonym) {
            return item.comments[0] 
            && item.comments[0].actor 
            && item.comments[0].actor.data 
            && item.comments[0].actor.data.username
            } else {
                return 'Anonymous'
            }
            
        }
    }
    const handleDate = () => {
        return calculateTime(item.data.last_message_at)
    }

    const handleImage = () => {
        if(item.isAnonym) {
            return 'https://firebasestorage.googleapis.com/v0/b/bettersocial-dev.appspot.com/o/anonym.png?alt=media&token=5ffe7504-c0e7-4a0c-9cbb-3e7b7572886f'
        }
        return item.postMaker.data.profile_pic_url
    }

    return (
        <ButtonHighlight onPress={() => onSelectAdditionalData(item)}  style={[styles.containerCard, {borderBottomColor: border}]} >
            <View style={styles.row} >
                {item.postMaker && item.postMaker.data ? <Avatar childrenType={<View style={styles.typeContainer} ><Image resizeMode='contain' source={FeedIcon} style={styles.iconStyle} /></View>} showType={showBadgePostNotif} size={48} image={handleImage()} /> : null}
            <View style={{flex: 1,  paddingLeft: 8}} >
                <View style={styles.row} >
                {item.postMaker && item.postMaker.data ? <Text numberOfLines={1} style={[styles.titleTextBig, {maxWidth: '85%'}]} >{item.postMaker.id === myProfile.user_id ? "Your post" : item.postMaker.data.username}: {item.titlePost}</Text> : null}
                <Text style={[styles.dateFont]} >{handleDate(item.comments[0] && item.comments[0].reaction)} </Text>

                </View>
                <View style={styles.replyContainer} >
                    {Array.isArray(item.comments) && item.comments.length > 0 ? <>
                        <Text numberOfLines={1} style={[styles.subtitleStyle, {color: grey}]} >
                    <Text style={styles.titleText} >{handleReplyComment()}:
                    </Text>
                  
                    {" "}
                    {item.comments[0] 
                    && item.comments[0].reaction 
                    && item.comments[0].reaction.data 
                    && item.comments[0].reaction.data.text} </Text></> : <Text numberOfLines={1} style={[styles.subtitleStyle, {color: grey}]} >No comments yet

                    </Text>}
        
                 
                    {countPostNotif && typeof countPostNotif === 'function' ? countPostNotif(item) : null}
           
                </View>
               
            </View>
           
            </View>
                <View style={[styles.descriptionContainer]} >
                <View style={[styles.avatarContainer, styles.avatarNoHeight]} />
                {item.postMaker.id === myProfile.user_id ?        <React.Fragment>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                <MemoIc_arrow_upvote_on style={styles.iconMargin} width={15} height={15} />
                    <Text style={styles.textVoteMargin} >
                        {item.upvote}
                    </Text>
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                <MemoIc_arrow_down_vote_on style={styles.iconMargin} width={15} height={15} />
                    <Text style={styles.textVoteMargin} >
                        {item.downvote}
                    </Text>
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                <MemoIc_comment style={styles.iconMargin} width={15} height={15} />
                    <Text style={styles.textVoteMargin} >
                        {item.comments.length}
                    </Text>
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                {Number(item.block) > 0 ?  <Image source={Imageblock} style={styles.iconMargin} width={15} height={15} /> : <MemoIc_block_inactive style={styles.iconMargin} width={15} height={15} />}
                    <Text style={styles.textVoteMargin} >
                        {String(item.block)}
                    </Text>
                </View>
                </React.Fragment> : null}
         
                
            </View> 
        </ButtonHighlight>
    )
}


export default React.memo (PostNotificationPreview, (prevProps, nextProps) => {
    return prevProps.item === nextProps.item
})