import ResetRequest from "../../src/components/Reset/ResetRequest";
import Copyright from "../../src/components/Copyright";

const resetRequest: React.FC = () => {
  return (
    <>
      <ResetRequest />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default resetRequest;
