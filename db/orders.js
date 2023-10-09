import {initiateSupabase} from './supabase';

const supabase = initiateSupabase();

async function insertOrder(name, mailingAddress, phoneNumber, contact) {
    try {
        // Validate the input values
        if (!name || typeof name !== 'string') {
            throw new Error('Invalid name value');
        }
        if (!mailingAddress || typeof mailingAddress !== 'string') {
            throw new Error('Invalid mailing address value');
        }
        if (!phoneNumber || typeof phoneNumber !== 'string') {
            throw new Error('Invalid phone number value');
        }
        if (!contact || typeof contact !== 'string') {
            throw new Error('Invalid contact value');
        }

        // Insert a new row into the 'orders' table with the provided values
        const { data, error } = await supabase
            .from('orders')
            .insert([{ name, mailing_address: mailingAddress, phone_number: phoneNumber, contact: contact }]);

        // Check for any errors during the insert
        if (error) throw error;

        // Return the inserted data (or true if you do not need the inserted data)
        return data;
    } catch (error) {
        console.error("Error inserting order:", error);
        return false;
    }
}

export {insertOrder}
