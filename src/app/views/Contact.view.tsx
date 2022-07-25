import { usePageTitle } from "../../core/hooks/usePageTitle";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { UserList } from "../features/UserList";
import { DefaultLayout } from "../layouts/Default/Default.layout";

export function Contact() {
  usePageTitle("Contato");

  return (
    <DefaultLayout>
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
