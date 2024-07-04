// App.js
import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ToastMessage from '../components/ToastMessage';
import Button from '../components/Button';
import ModalExample from '../components/ModalExample';

export default function App() {
    const [toastType, setToastType] = useState('success');
    const toastRef = useRef(null);

    const handleShowToast = (type) => {
        setToastType(type);
        if (toastRef.current) {
            toastRef.current.show();
        }
    };

    return (
        <View style={styles.container}>
            <ToastMessage
                type={toastType}
                text={`This is a ${toastType} message`}
                description="Detailed message description"
                ref={toastRef}
                timeout={2000}
                onDismiss={() => console.log(`${toastType} toast dismissed`)}
            />

            <Button
                type="success"
                text="Success"
                onPress={() => handleShowToast('success')}
            />
            <Button
                type="danger"
                text="Danger"
                onPress={() => handleShowToast('danger')}
            />
            <Button
                type="info"
                text="Info"
                onPress={() => handleShowToast('info')}
            />
            <Button
                type="warning"
                text="Warning"
                onPress={() => handleShowToast('warning')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
