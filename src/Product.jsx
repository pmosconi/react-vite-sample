import { Button, Container, SpaceBetween, Spinner} from "@cloudscape-design/components";
import { useParams, useNavigate  } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const getProductImage = id =>  fetch(`http://localhost:8000/product/${id}`)
  .then(response => response.json())
  .then(json => json);

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({ queryKey: ['product', id], queryFn: () => getProductImage(id) });

  if (isLoading) {
    return (
      <Container>
        <Spinner size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <SpaceBetween size= "l">
        <h1>{id}</h1>
        <img src={product.imageUrl} alt="id" width="250"></img>
        <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
        </SpaceBetween>
    </Container>
  );
}
