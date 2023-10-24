import LoginForm from "@/components/Organisms/Login-form/LoginForm";

type LoginPageProps = {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPage = ({ setHasAccount }: LoginPageProps) => {
  return (
    <div>
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <LoginForm setHasAccount={setHasAccount} />
      </div>
    </div>
  );
};

export default LoginPage;
