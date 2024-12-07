import React, { useState } from 'react';
import { ScrollView, View, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from'@react-navigation/native-stack';
import  { StatusBar } from 'expo-status-bar';

import { CoinAnalysis } from '../../components/CoinAnalysis';
import { DailyRecommendations } from '../../components/DailyRecommendations';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { Button } from '../../components/ui/button';

type RootStackParamList = {
  Home: undefined;
  CoinAnalysis: undefined;
  DailyRecommendations: undefined;
}

type HomeScreenNavigationProp =
NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const Navigation = useNavigation<HomeScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState<'analysis' | 'recommendation'>('analysis');

  return (
<ScrollView style={styles.container}>
  <StatusBar style="auto" />
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Welcome to your Crypto-Analyser App!</ThemedText>
      <View style={styles.tabContainer}>
        <Button 
        onPress={() => setActiveTab('analysis')} 
        className={activeTab === 'analysis' ? 'bg-primary' : 'bg-secondary'}
        > Coin Analysis 
        </Button>
        <Button 
        onPress={() => setActiveTab('recommendation')} 
        className={activeTab === 'recommendation' ? 'bg-primary' : 'bg-secondary'}
        > Daily Recommendations
        </Button>
        </View>
        { activeTab === 'analysis' ? <CoinAnalysis /> : <DailyRecommendations />}
      </ThemedView>
       </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});