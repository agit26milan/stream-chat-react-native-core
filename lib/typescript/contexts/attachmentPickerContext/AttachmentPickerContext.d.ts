import React, { PropsWithChildren } from 'react';
import type { Asset } from '../../native';
import type { UnknownType } from '../../types/types';
export declare type AttachmentPickerIconProps = {
    numberOfImageUploads: number;
    selectedPicker?: 'images';
};
export declare type AttachmentPickerContextValue = {
    /**
     * `bottomInset` determine the height of the `AttachmentPicker` and the underlying shift to the `MessageList` when it is opened.
     * This can also be set via the `setBottomInset` function provided by the `useAttachmentPickerContext` hook.
     *
     * Please check [OverlayProvider](https://github.com/GetStream/stream-chat-react-native/wiki/Cookbook-v3.0#overlayprovider) section in Cookbook
     * for more details.
     */
    bottomInset: number;
    /**
     * Custom UI component for [camera selector icon](https://github.com/GetStream/stream-chat-react-native/blob/master/screenshots/docs/1.png)
     *
     * **Default: ** [CameraSelectorIcon](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/CameraSelectorIcon.tsx)
     */
    CameraSelectorIcon: React.ComponentType<AttachmentPickerIconProps>;
    closePicker: () => void;
    /**
     * Custom UI component for [file selector icon](https://github.com/GetStream/stream-chat-react-native/blob/master/screenshots/docs/1.png)
     *
     * **Default: ** [FileSelectorIcon](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/FileSelectorIcon.tsx)
     */
    FileSelectorIcon: React.ComponentType<AttachmentPickerIconProps>;
    /**
     * Custom UI component for [image selector icon](https://github.com/GetStream/stream-chat-react-native/blob/master/screenshots/docs/1.png)
     *
     * **Default: ** [ImageSelectorIcon](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/ImageSelectorIcon.tsx)
     */
    ImageSelectorIcon: React.ComponentType<AttachmentPickerIconProps>;
    /**
     * Limit for maximum files that can be attached per message.
     */
    maxNumberOfFiles: number;
    openPicker: () => void;
    selectedImages: Asset[];
    setBottomInset: React.Dispatch<React.SetStateAction<number>>;
    setMaxNumberOfFiles: React.Dispatch<React.SetStateAction<number>>;
    setSelectedImages: React.Dispatch<React.SetStateAction<Asset[]>>;
    setSelectedPicker: React.Dispatch<React.SetStateAction<'images' | undefined>>;
    setTopInset: React.Dispatch<React.SetStateAction<number>>;
    topInset: number;
    attachmentPickerBottomSheetHeight?: number;
    attachmentSelectionBarHeight?: number;
    selectedPicker?: 'images';
};
export declare const AttachmentPickerContext: React.Context<AttachmentPickerContextValue>;
export declare const AttachmentPickerProvider: ({ children, value, }: React.PropsWithChildren<{
    value?: (Pick<AttachmentPickerContextValue, "attachmentSelectionBarHeight" | "attachmentPickerBottomSheetHeight" | "CameraSelectorIcon" | "closePicker" | "FileSelectorIcon" | "ImageSelectorIcon" | "openPicker"> & Partial<Pick<AttachmentPickerContextValue, "bottomInset" | "topInset">>) | undefined;
}>) => JSX.Element;
export declare const useAttachmentPickerContext: () => AttachmentPickerContextValue;
export declare const withAttachmentPickerContext: <P extends UnknownType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof AttachmentPickerContextValue>>;
