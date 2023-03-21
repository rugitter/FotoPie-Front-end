import EmailSent from "../../src/components/Reset/EmailSent";
import Copyright from "../../src/components/Copyright";

const emailSent: React.FC = () => {
  return (
    <>
      <EmailSent />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default emailSent;
