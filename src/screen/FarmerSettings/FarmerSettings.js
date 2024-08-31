import React from 'react';
import { View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="हिन्दी" onPress={() => changeLanguage('hi')} />
    </View>
  );
};

export default SettingsScreen;
