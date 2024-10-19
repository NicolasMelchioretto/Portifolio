import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function App() {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Uma breve descrição do projeto 1.',
      link: 'https://github.com/NicolasMelchioretto/filme',
    },
    {
      title: 'Projeto 2',
      description: 'Uma breve descrição do projeto 2.',
      link: 'https://github.com/NicolasMelchioretto/chuck',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="App" style={{ backgroundColor: '#f9f9f9' }}>
      <Navbar style={{ backgroundColor: '#333' }} expand="lg"> {/* Cor de fundo alterada para cinza mais escuro */}
        <Navbar.Brand href="#home" style={{ color: '#ffffff', marginLeft: '20px' }}>Nicolas Melchioretto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: '20px' }}>
            <Nav.Link href="#sobre" style={{ color: '#ffffff' }}>Sobre</Nav.Link>
            <Nav.Link href="#projetos" style={{ color: '#ffffff' }}>Projetos</Nav.Link>
            <Nav.Link href="#contato" style={{ color: '#ffffff' }}>Contato</Nav.Link>
            <Nav.Link href="#redes-sociais" style={{ color: '#ffffff' }}>Redes Sociais</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container id="sobre" style={{ padding: '20px' }}>
        <Row>
          <Col md={6}>
            <h2>Sobre Mim</h2>
            <p>Sou um desenvolvedor de software apaixonado por tecnologia e inovação. Com mais de 5 anos de experiência em desenvolvimento de aplicativos e sistemas, tenho uma sólida formação em programação e uma paixão por criar soluções inovadoras e eficientes. Meu objetivo é sempre entregar projetos de alta qualidade e atender às necessidades dos meus clientes.</p>
          </Col>
          <Col md={6}>
            <img src="nick" alt="Minha Foto" />
          </Col>
        </Row>
      </Container>

      <Container id="projetos" style={{ padding: '20px' }}>
        <h2>Projetos</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.link}>Ver no GitHub</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="contato" style={{ padding: '20px' }}>
        <h2>Contato</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Seu nome" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Seu email" />
              </Form.Group>
              <Form.Group controlId="formMensagem">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escreva sua mensagem..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container id="redes-sociais" style={{ backgroundColor: '#444', color: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>Redes Sociais</h2>
        <Row className="justify-content-center">
          <Col md="auto">
            <a href="https://github.com/NicolasMelchioretto" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', marginRight: '15px' }}>GitHub</a>
          </Col>
          <Col md="auto">
            <a href="https://www.linkedin.com/in/nicolas-melchioretto-2a6b31258/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', marginLeft: '15px' }}>LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
