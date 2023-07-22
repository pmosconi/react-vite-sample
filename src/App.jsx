import { FilterableProductTable } from './FilterableProductTable';
import { Product } from './Product';
import { AppLayout, ContentLayout, Header } from '@cloudscape-design/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60,
      refetchInterval: 5 * 1000 * 60,
      refetchIntervalInBackground: true,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout
        contentType="form"
        content={
          <ContentLayout
            header={<Header variant="h1">React Demo</Header>}
          >
            <Router>
              <Routes>
                <Route path="/" element={<FilterableProductTable />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
          </Router>
        </ContentLayout>
        }
        navigationHide
        toolsHide
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
