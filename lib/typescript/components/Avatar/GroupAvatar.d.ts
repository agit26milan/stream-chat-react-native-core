import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare type GroupAvatarProps = {
    /** total size in pixels */
    size: number;
    containerStyle?: StyleProp<ViewStyle>;
    /** image urls */
    images?: string[];
    /** name of the users, used for fallback */
    names?: string[];
    testID?: string;
};
/**
 * GroupAvatar - A round group of avatar images with fallbacks to users' initials
 */
export declare const GroupAvatar: React.FC<GroupAvatarProps>;
