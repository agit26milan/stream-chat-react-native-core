var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.Colors = exports.DEFAULT_STATUS_ICON_SIZE = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../../../utils/utils");

var DEFAULT_STATUS_ICON_SIZE = 16;
exports.DEFAULT_STATUS_ICON_SIZE = DEFAULT_STATUS_ICON_SIZE;
var Colors = {
  accent_blue: '#005FFF',
  accent_green: '#20E070',
  accent_red: '#FF3742',
  bg_gradient_end: '#F7F7F7',
  bg_gradient_start: '#FCFCFC',
  black: '#000000',
  blue_alice: '#E9F2FF',
  border: '#00000014',
  grey: '#7A7A7A',
  grey_gainsboro: '#DBDBDB',
  grey_whisper: '#ECEBEB',
  icon_background: '#FFFFFF',
  modal_shadow: '#00000099',
  overlay: '#00000033',
  overlay_dark: '#00000099',
  shadow_icon: '#00000040',
  targetedMessageBackground: '#FBF4DD',
  transparent: 'transparent',
  white: '#FFFFFF',
  white_smoke: '#F2F2F2',
  white_snow: '#FCFCFC'
};
exports.Colors = Colors;
var defaultTheme = {
  attachmentPicker: {
    bottomSheetContentContainer: {},
    errorButtonText: {},
    errorContainer: {},
    errorText: {},
    image: {},
    imageOverlay: {},
    imageOverlaySelectedComponent: {
      check: {}
    }
  },
  attachmentSelectionBar: {
    container: {},
    icon: {}
  },
  avatar: {
    BASE_AVATAR_SIZE: 32,
    container: {},
    image: {
      borderRadius: 16,
      height: 32,
      width: 32
    },
    presenceIndicator: {
      cx: 6,
      cy: 6,
      r: 5,
      strokeWidth: 2
    },
    presenceIndicatorContainer: {}
  },
  channel: {
    selectChannel: {}
  },
  channelListFooterLoadingIndicator: {
    container: {}
  },
  channelListHeaderErrorIndicator: {
    container: {},
    errorText: {}
  },
  channelListLoadingIndicator: {
    container: {}
  },
  channelListMessenger: {
    flatList: {},
    flatListContent: {}
  },
  channelListSkeleton: {
    animationTime: 1800,
    background: {},
    container: {},
    gradientStart: {
      stopOpacity: 0
    },
    gradientStop: {
      stopOpacity: 0.5
    },
    height: 64
  },
  channelPreview: {
    checkAllIcon: {
      height: DEFAULT_STATUS_ICON_SIZE,
      width: DEFAULT_STATUS_ICON_SIZE
    },
    checkIcon: {
      height: DEFAULT_STATUS_ICON_SIZE,
      width: DEFAULT_STATUS_ICON_SIZE
    },
    container: {},
    contentContainer: {},
    date: {},
    message: {
      fontWeight: '400'
    },
    row: {},
    title: {},
    unreadContainer: {},
    unreadText: {}
  },
  colors: (0, _extends2["default"])({}, Colors),
  dateHeader: {
    container: {},
    text: {}
  },
  emptyStateIndicator: {
    channelContainer: {},
    channelDetails: {},
    channelTitle: {}
  },
  groupAvatar: {
    container: {},
    image: {
      resizeMode: 'cover'
    }
  },
  iconBadge: {
    icon: {},
    iconInner: {},
    unreadCount: {}
  },
  iconSquare: {
    container: {},
    image: {}
  },
  imageGallery: {
    blurType: 'light',
    footer: {
      centerContainer: {},
      container: {},
      imageCountText: {},
      innerContainer: {},
      leftContainer: {},
      rightContainer: {}
    },
    grid: {
      contentContainer: {},
      gridAvatar: {},
      gridAvatarWrapper: {},
      gridImage: {},
      handle: {},
      handleText: {},
      overlay: {}
    },
    header: {
      centerContainer: {},
      container: {},
      dateText: {},
      innerContainer: {},
      leftContainer: {},
      rightContainer: {},
      usernameText: {}
    }
  },
  inlineDateSeparator: {
    container: {},
    text: {}
  },
  loadingDots: {
    container: {},
    loadingDot: {},
    spacing: 4
  },
  loadingErrorIndicator: {
    container: {},
    errorText: {},
    retryText: {}
  },
  loadingIndicator: {
    container: {},
    loadingText: {}
  },
  messageInput: {
    attachButton: {},
    attachButtonContainer: {},
    attachmentSelectionBar: {},
    autoCompleteInputContainer: {},
    commandsButton: {},
    commandsButtonContainer: {},
    composerContainer: {},
    container: {},
    editingBoxContainer: {},
    editingBoxHeader: {},
    editingBoxHeaderTitle: {},
    fileUploadPreview: {
      dismiss: {},
      fileContainer: {},
      fileContentContainer: {},
      filenameText: {},
      fileSizeText: {},
      fileTextContainer: {},
      flatList: {}
    },
    giphyContainer: {},
    giphyText: {},
    imageUploadPreview: {
      dismiss: {},
      flatList: {},
      itemContainer: {},
      upload: {}
    },
    inputBox: {},
    inputBoxContainer: {},
    moreOptionsButton: {},
    optionsContainer: {},
    replyContainer: {},
    sendButton: {},
    sendButtonContainer: {},
    showThreadMessageInChannelButton: {
      check: {},
      checkBoxActive: {},
      checkBoxInactive: {},
      container: {},
      innerContainer: {},
      text: {}
    },
    suggestions: {
      command: {
        args: {},
        container: {},
        iconContainer: {},
        title: {}
      },
      commandsHeader: {
        container: {},
        title: {}
      },
      container: {
        maxHeight: (0, _utils.vh)(25)
      },
      emoji: {
        container: {},
        text: {}
      },
      emojisHeader: {
        container: {},
        title: {}
      },
      item: {},
      mention: {
        avatarSize: 40,
        column: {},
        container: {},
        name: {},
        tag: {}
      }
    },
    suggestionsListContainer: {},
    uploadProgressIndicator: {
      container: {},
      overlay: {}
    }
  },
  messageList: {
    container: {},
    contentContainer: {},
    errorNotification: {},
    errorNotificationText: {},
    inlineUnreadIndicator: {
      container: {},
      text: {}
    },
    listContainer: {},
    messageSystem: {
      container: {},
      dateText: {},
      line: {},
      text: {},
      textContainer: {}
    },
    scrollToBottomButton: {
      container: {},
      touchable: {},
      unreadCountNotificationContainer: {},
      unreadCountNotificationText: {},
      wrapper: {}
    },
    typingIndicatorContainer: {}
  },
  messageSimple: {
    actions: {
      button: {},
      buttonText: {},
      container: {}
    },
    avatarWrapper: {
      container: {},
      leftAlign: {
        marginRight: 8
      },
      rightAlign: {
        marginLeft: 8
      },
      spacer: {
        height: 28,
        width: 32
      }
    },
    card: {
      authorName: {},
      authorNameContainer: {},
      authorNameFooter: {},
      authorNameFooterContainer: {},
      authorNameMask: {},
      container: {},
      cover: {},
      footer: {
        description: {},
        title: {
          fontWeight: '700'
        }
      },
      noURI: {
        borderLeftWidth: 2,
        paddingLeft: 8
      }
    },
    container: {},
    content: {
      container: {
        borderRadiusL: 16,
        borderRadiusS: 0
      },
      containerInner: {},
      deletedContainer: {},
      deletedContainerInner: {},
      deletedMetaText: {
        paddingHorizontal: 10
      },
      deletedText: {
        em: {
          fontSize: 15,
          fontStyle: 'italic',
          fontWeight: '400'
        }
      },
      errorContainer: {
        paddingRight: 12,
        paddingTop: 0
      },
      errorIcon: {
        height: 20,
        width: 20
      },
      errorIconContainer: {
        bottom: -2,
        position: 'absolute',
        right: -12
      },
      eyeIcon: {
        height: 16,
        width: 16
      },
      markdown: {},
      messageUser: {
        fontSize: 12,
        fontWeight: '700',
        paddingRight: 6
      },
      metaContainer: {
        flexDirection: 'row',
        marginTop: 4
      },
      metaText: {
        fontSize: 12
      },
      replyBorder: {},
      replyContainer: {},
      textContainer: {
        onlyEmojiMarkdown: {
          text: {
            fontSize: 50
          }
        }
      },
      wrapper: {}
    },
    file: {
      container: {},
      details: {},
      fileSize: {},
      icon: {},
      title: {}
    },
    fileAttachmentGroup: {
      container: {}
    },
    gallery: {
      galleryContainer: {},
      galleryItemColumn: {},
      halfSize: 100,
      image: {},
      imageContainer: {},
      moreImagesContainer: {},
      moreImagesText: {},
      size: 200,
      width: 250
    },
    giphy: {
      cancel: {},
      cancelContainer: {},
      container: {},
      giphy: {},
      giphyContainer: {},
      giphyMask: {},
      giphyText: {},
      selectionContainer: {},
      selector: {},
      send: {},
      sendContainer: {},
      shuffleButton: {},
      title: {}
    },
    reactionList: {
      container: {},
      middleIcon: {},
      radius: 2,
      reactionBubble: {},
      reactionBubbleBackground: {},
      reactionSize: 24,
      strokeSize: 1
    },
    replies: {
      avatar: {},
      avatarContainerMultiple: {},
      avatarContainerSingle: {},
      container: {},
      leftAvatarsContainer: {},
      leftCurve: {},
      messageRepliesText: {},
      rightAvatarsContainer: {},
      rightCurve: {}
    },
    status: {
      checkAllIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      },
      checkIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      },
      readByCount: {},
      statusContainer: {},
      timeIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      }
    },
    targetedMessageUnderlay: {}
  },
  overlay: {
    padding: 8,
    reactions: {
      avatarContainer: {},
      avatarName: {},
      avatarSize: 64,
      container: {},
      flatListContainer: {},
      radius: 2,
      reactionBubble: {},
      reactionBubbleBackground: {},
      title: {}
    },
    reactionsList: {
      radius: 2.5,
      reaction: {},
      reactionList: {},
      reactionSize: 24
    }
  },
  reply: {
    container: {},
    fileAttachmentContainer: {},
    imageAttachment: {},
    markdownStyles: {},
    messageContainer: {},
    textContainer: {}
  },
  screenPadding: 8,
  spinner: {},
  thread: {
    newThread: {
      text: {}
    }
  },
  typingIndicator: {
    container: {},
    text: {
      fontSize: 14
    }
  }
};
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=theme.js.map