import {initiateSupabase} from './supabase';

const supabase = initiateSupabase();

async function insertCoPublisher(wallet, name) {
    try {
        if (!wallet || typeof wallet !== 'string') {
            throw new Error('Invalid wallet value');
        }

        const { data, error } = await supabase
            .from('copublishers')
            .insert([{ wallet, name }]);

        if (error) throw error;

        return data;
    } catch (error) {
        console.error("Error inserting co-publisher:", error);
        return false;
    }
}
async function getCopublisherByWallet(wallet) {
    try {
        if (!wallet || typeof wallet !== 'string') {
            throw new Error('Invalid wallet value');
        }

        const { data, error } = await supabase
            .from('copublishers')
            .select('*')
            .eq('wallet', wallet);

        if (error) throw error;

        return data ? data[0] : null; // Assuming wallet values are unique, we return the first result
    } catch (error) {
        console.error("Error getting co-publisher by wallet:", error);
        return null;
    }
}

async function updateCopublisher(wallet, name) {
    try {
        if (!wallet || typeof wallet !== 'string') {
            throw new Error('Invalid wallet value');
        }

        if (!name || typeof name !== 'string') {
            throw new Error('Invalid name value');
        }

        const { data, error } = await supabase
            .from('copublishers')
            .update({ name })
            .eq('wallet', wallet);

        if (error) throw error;
        console.log("updated copublisher successfully");
        return data ? data[0] : null; // Assuming wallet values are unique, we return the updated result
    } catch (error) {
        console.error("Error updating co-publisher:", error);
        return null;
    }
}


export {insertCoPublisher, getCopublisherByWallet, updateCopublisher}
