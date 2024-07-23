import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const HIDDEN_ROUTES = [
    "components/ModalPassword",
    "hooks/useStorage",
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="passwords/index"
        options={{
          title: 'Senhas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'lock-closed' : 'lock-closed-outline'} color={color} />
          ),
        }}
      />
     {HIDDEN_ROUTES.map((route) => (
        <Tabs.Screen
          key={route}
          name={route}
          options={{
            href: null,
          }}
        />
      ))}
    </Tabs>
  );
}
