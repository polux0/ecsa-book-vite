
import { setInvitationUsed, getInvitationByInvitationValue, getNextThreeInvitations, setInvitationInvitedBy } from "../db/invitations";

const handleInvitationOperations = async (invitationId, signer) => {
    try {
        await setInvitationUsed(invitationId, signer);
        let initial = await getInvitationByInvitationValue(invitationId);
        const threeNewInvitations = await getNextThreeInvitations();
        threeNewInvitations.forEach(element => {
        setInvitationInvitedBy(initial[0].id, element.value);
        for (let i = 1; i <= 3; i++) {
          let element = document.getElementById(`invitation-link${i}`);
          element.innerHTML = `${import.meta.env.VITE_INVITATION_URL}${threeNewInvitations[i-1].value}`;
      }
      });
      } catch (error) {
        console.log('operations with invitation storage failed...');
      }
};
export {handleInvitationOperations};
