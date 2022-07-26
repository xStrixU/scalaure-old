import { AccountDetailsContent } from 'components/AccountContents/AccountDetailsContent';
import { PrivateRoute } from 'components/Private/PrivateRoute';

const AccountDetailsPage = () => (
  <PrivateRoute>
    <AccountDetailsContent />
  </PrivateRoute>
);

export default AccountDetailsPage;
