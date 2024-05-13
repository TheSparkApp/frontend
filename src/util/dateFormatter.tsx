import React from 'react';

interface DateFormatterProps {
  timestamp: number;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ timestamp }) => {
    const formatTimestamp = (unixTimestamp: number): string => {
      const date = new Date(unixTimestamp * 1000); // Umrechnung von Sekunden in Millisekunden
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
  
      if (isToday(date, now)) {
        return `Today at ${formatTime(date)}`;
      } else if (isSameDay(date, yesterday)) {
        return `Yesterday at ${formatTime(date)}`;
      } else {
        return `${formatDate(date)} at ${formatTime(date)}`;
      }
    };
  
    const isSameDay = (date1: Date, date2: Date): boolean => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };
  
    const isToday = (date: Date, now: Date): boolean => {
      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
      );
    };
  
    const formatTime = (date: Date): string => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
    };
  
    const formatDate = (date: Date): string => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    return <>{formatTimestamp(timestamp)}</>;
  };
  
  export default DateFormatter;