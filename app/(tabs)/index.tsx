import React, { useState } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from'@react-navigation/native-stack';
import  { StatusBar } from 'expo-status-bar';

import { CoinAnalysis } from '@/components/CoinAnalysis';
import { DailyRecommendations } from '@/components/DailyRecommendations';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/button';

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
<ScrollView style={{ flex: 1, backgroundColor: 'background' }}>
  <StatusBar style="auto" />
      <ThemedView style={{ padding: 16 }}>
        <ThemedText type="title" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Welcome to your Crypto-Analyser App!</ThemedText>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Button 
        onPress={() => setActiveTab('analysis')} 
        style={{ marginRight: 8, backgroundColor: activeTab === 'analysis' ? 'primary' : 'secondary' }}
        title="Coin Analysis" />
        <Button 
        onPress={() => setActiveTab('recommendation')} 
        style={{ backgroundColor: activeTab === 'recommendation' ? 'primary' : 'secondary' }}
        />
        </View>
        { activeTab === 'analysis' ? <CoinAnalysis /> : <DailyRecommendations />}
      </ThemedView>
       </ScrollView>
  );
}