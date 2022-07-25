import { PrivateRoute } from 'components/Private/PrivateRoute';
import { SignUpPageContent } from 'components/EntryPageContents/SignUpPageContent';

const SignUpPage = () => (
  <PrivateRoute loggedIn={false}>
    <SignUpPageContent />
  </PrivateRoute>
);

export default SignUpPage;
