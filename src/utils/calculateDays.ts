// src/utils/calculateDays.ts
export const calculateDaysUntil25 = (birthDate: Date): number => {
    const now = new Date();
    const age25 = new Date(birthDate);
    age25.setFullYear(age25.getFullYear() + 25);

    const diffInTime = age25.getTime() - now.getTime();
    return Math.ceil(diffInTime / (1000 * 3600 * 24));
};