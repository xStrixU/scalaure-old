import { PrivateRoute } from 'components/Private/PrivateRoute';
import { SignInPageContent } from 'components/EntryPageContents/SignInPageContent';

const SignInPage = () => (
  <PrivateRoute loggedIn={false}>
    <SignInPageContent />
  </PrivateRoute>
);

export default SignInPage;
