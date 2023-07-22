import { FilterableProductTable } from './FilterableProductTable';
import { Product } from './Product';
import { AppLayout, ContentLayout, Header } from '@cloudscape-design/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
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
  );
}
