import {initiateSupabase} from './supabase';

const supabase = initiateSupabase();

async function insertCoPublisher(wallet) {
    try {
        if (!wallet || typeof wallet !== 'string') {
            throw new Error('Invalid wallet value');
        }

        const { data, error } = await supabase
            .from('copublishers')
            .insert([{ wallet }]);

        if (error) throw error;

        return data;
    } catch (error) {
        console.error("Error inserting co-publisher:", error);
        return false;
    }
}


export {insertCoPublisher}
