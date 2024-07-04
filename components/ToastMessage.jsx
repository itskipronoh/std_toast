// components/ToastMessage.jsx
import { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';

const ToastMessage = forwardRef(({ type = "info", text, description, timeout = 1000, onDismiss }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const TOAST_TYPE = {
        success: {
            backgroundColor: '#2ecc71',
            icon: 'check-circle',
        },
        danger: {
            backgroundColor: '#e74c3c',
            icon: 'exclamation-circle',
        },
        info: {
            backgroundColor: '#3498db',
            icon: 'info-circle',
        },
        warning: {
            backgroundColor: '#f39c12',
            icon: 'exclamation-triangle',
        },
    };

    const showToast = () => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onDismiss) onDismiss();
            clearTimeout(timer);
        }, timeout);
    };

    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) onDismiss();
    };

    useImperativeHandle(ref, () => ({
        show: showToast,
    }));

    const backgroundColor = TOAST_TYPE[type]?.backgroundColor || TOAST_TYPE.info.backgroundColor;
    const icon = TOAST_TYPE[type]?.icon || TOAST_TYPE.info.icon;

    return (
        <>
            {isVisible && (
                <TouchableWithoutFeedback onPress={handleDismiss}>
                    <Animated.View
                        style={[styles.toastContainer, { backgroundColor }]}
                        entering={FadeInUp.delay(200)}
                        exiting={FadeOutUp}
                    >
                        <FontAwesome5 name={icon} size={40} color="#FFF" />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{text}</Text>
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            )}
        </>
    );
});

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        top: 50,
        width: '90%',
        height: 100,
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textContainer: {
        marginLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF',
    },
});

export default ToastMessage;
