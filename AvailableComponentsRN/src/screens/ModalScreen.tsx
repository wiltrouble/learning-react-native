import {Button, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ModalScreen = () => {

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />


      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsVisible(true)}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.text, textAlign: 'center', fontSize: 22}}>
          OPEN MODAL
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* modal content */}
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text}}>Modal Title</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20, color: colors.text}}>Body</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
