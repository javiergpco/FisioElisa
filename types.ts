import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  colSpan?: string;
  bg?: string;
  textColor?: string;
}

export interface PriceItem {
  id: string;
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}