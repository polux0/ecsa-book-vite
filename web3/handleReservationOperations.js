import { setReservationUsed, getReservationByReservationValue } from "../db/reservations";
import { getNextInvitation, setInvitationInvitedByReservation } from "../db/invitations";

const handleReservationOperations = async (reservationId, signer) => {
  try {
      await setReservationUsed(reservationId, signer);
      let initial = await getReservationByReservationValue(reservationId);
      const newInvitation = await getNextInvitation();
      console.log('new invitation: ' + newInvitation);
      setInvitationInvitedByReservation(initial[0].id, newInvitation[0].value);
      localStorage.setItem('invitation', `${import.meta.env.VITE_INVITATION_URL}${newInvitation[0].value}`);
    } catch (error) {
      console.log('operations with invitation & reservation storage silently failed...');
    }
  }
export {handleReservationOperations};

setInvitationInvitedByReservation