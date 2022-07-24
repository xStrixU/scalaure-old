import { ConditionalRoute } from 'components/Conditionals/ConditionalRoute';
import { SignUpPageContent } from 'components/EntryPageContents/SignUpPageContent';

import { INDEX_PATH } from 'lib/paths';

const SignUpPage = () => (
  <ConditionalRoute loggedIn={false} redirectPath={INDEX_PATH}>
    <SignUpPageContent />
  </ConditionalRoute>
);

export default SignUpPage;
