import { ConditionalRoute } from 'components/Conditionals/ConditionalRoute';
import { SignInPageContent } from 'components/EntryPageContents/SignInPageContent';

import { INDEX_PATH } from 'lib/paths';

const SignInPage = () => (
  <ConditionalRoute loggedIn={false} redirectPath={INDEX_PATH}>
    <SignInPageContent />
  </ConditionalRoute>
);

export default SignInPage;
