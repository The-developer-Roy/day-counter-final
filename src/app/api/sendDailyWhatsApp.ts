// src/pages/api/sendDailyWhatsApp.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sendWhatsApp } from '@/utils/sendWhatsapp';
import { calculateDaysUntil25 } from '../../utils/calculateDays';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const birthDate = new Date(2005, 0, 1); // Replace with your actual birthdate
  const daysUntil25 = calculateDaysUntil25(birthDate);
  const message = `Another day has passed! Only ${daysUntil25} days left until you turn 25!`;

  await sendWhatsApp('+918011758618', message); // Your phone number
  res.status(200).json({ message: 'WhatsApp message sent!' });
}
