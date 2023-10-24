import LoginForm from "@/components/Organisms/Login-form/LoginForm";

type LoginPageProps = {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPage = ({ hasAccount, setHasAccount }: LoginPageProps) => {
  return (
    <div>
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <LoginForm setHasAccount={setHasAccount} hasAccount={hasAccount} />
      </div>
    </div>
  );
};

export default LoginPage;
