export const checkAvailability = async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return fixed mock slots for demo
    return [
        { id: 'slot_1', label: 'Tomorrow, 10:00 AM' },
        { id: 'slot_2', label: 'Tomorrow, 2:00 PM' },
        { id: 'slot_3', label: 'Wednesday, 11:30 AM' }
    ];
};

export const bookCall = async (email: string, slotId: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        success: true,
        message: `Confirmed! Invitation sent to ${email} for the selected time.`
    };
}
