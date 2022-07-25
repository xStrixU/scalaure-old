import { PrivateRoute } from 'components/Private/PrivateRoute';
import { SignUpPageContent } from 'components/EntryPageContents/SignUpPageContent';

import { INDEX_PATH } from 'lib/paths';

const SignUpPage = () => (
  <PrivateRoute loggedIn={false} redirectPath={INDEX_PATH}>
    <SignUpPageContent />
  </PrivateRoute>
);

export default SignUpPage;
