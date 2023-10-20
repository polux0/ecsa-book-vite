
import { setInvitationUsed, getInvitationByInvitationValue, getNextInvitation, setInvitationInvitedBy } from "../db/invitations";


const handleInvitationOperations = async (invitationId, signer) => {
  try {
      await setInvitationUsed(invitationId, `,${signer}`);
      let initial = await getInvitationByInvitationValue(invitationId);
      const newInvitation = await getNextInvitation();
      console.log('new invitation: ' + newInvitation);
      setInvitationInvitedBy(initial[0].id, newInvitation[0].value);
      localStorage.setItem('invitation', newInvitation[0].value);
      localStorage.setItem('invitation', `${import.meta.env.VITE_INVITATION_URL}${newInvitation[0].value}`);
    } catch (error) {
      console.log('operations with invitation storage failed...');
      console.log(error);
    }
};  
export {handleInvitationOperations};
