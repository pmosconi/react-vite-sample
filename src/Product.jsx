import { useState, useEffect } from 'react';
import { Button, Container, SpaceBetween, Spinner} from "@cloudscape-design/components";
import { useParams, useNavigate  } from 'react-router-dom';

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/product/${id}`)
      .then(response => response.json())
      .then(json => {
        setProduct(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [id]);

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
