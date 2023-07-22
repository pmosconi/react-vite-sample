import { FilterableProductTable } from './FilterableProductTable';
import { PRODUCTS } from './utils/products';
import { AppLayout, ContentLayout, Header } from '@cloudscape-design/components';

export default function App() {
  return (
    <AppLayout
      contentType="form"
      content={
        <ContentLayout
          header={<Header variant="h1">React Demo</Header>}
        >
        <FilterableProductTable products={PRODUCTS} />
      </ContentLayout>
      }
      navigationHide
      toolsHide
    />
  );
}
