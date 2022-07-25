import { PrivateRoute } from 'components/Private/PrivateRoute';
import { SignInPageContent } from 'components/EntryPageContents/SignInPageContent';

import { INDEX_PATH } from 'lib/paths';

const SignInPage = () => (
  <PrivateRoute loggedIn={false} redirectPath={INDEX_PATH}>
    <SignInPageContent />
  </PrivateRoute>
);

export default SignInPage;
