import { Container } from "./components/Container";
import { Card, CardTop, CardBottom } from "./components/Card";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

export function PageComponent() {
  return (
      <Container background="#f1f6ed" padding="29">
        <Card background="#8f5555" padding="3">
          <CardTop>
            <Text text="Title" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Card background="#de8e8e" padding="3">
          <CardTop>
            <Text text="Title" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Container background="#ffffff" padding="20">
          <Button size="small" variant="contained" color="primary" onClickScript="alert('i am alive')">Click me</Button>
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Text text="Hi world" fontSize="20"></Text>
        </Container>
        <Text text="Hi world" fontSize="20"></Text>
        <Text text="Hi world йохохохо" fontSize="22"></Text>
        <Container background="#dee8ff" padding="100">
          <Text text="THE TEXT" fontSize="50"></Text>
        </Container>
        <Card background="#f7dada" padding="45">
          <CardTop>
            <Text text="Title" fontSize="29"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom></CardBottom>
        </Card>
      </Container>
  );
}