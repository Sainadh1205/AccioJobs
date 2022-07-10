import React, { Component } from "react";
import "./ToDo.css";
import {
  Container,
  Col,
  InputGroup,
  Button,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineAddBox } from "react-icons/md";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todoList: [],
      isEditing: false,
      editingIndex: null,
    };
  }

  addOrUpdateTodo() {
    const { input, isEditing, editingIndex } = this.state;
    if (input) {
      if (isEditing) {
        this.setState((prevState) => ({
          todoList: prevState.todoList.map((todo, index) => {
            if (index === editingIndex) {
              todo = input;
            }
            return todo;
          }),
          input: "",
          isEditing: false,
        }));
      } else {
        this.setState((prevState) => ({
          todoList: [...prevState.todoList, input],
          input: "",
        }));
      }
    }
  }

  editTodo(inputIndex) {
    this.setState((prevState) => ({
      input: prevState.todoList[inputIndex],
      isEditing: true,
      editingIndex: inputIndex,
    }));
  }
  deleteTodo(inputIndex) {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(
        (todo, index) => index !== inputIndex
      ),
    }));
  }

  render() {
    const { todoList, isEditing } = this.state;

    return (
      <Container style={{ margin: "20px auto" }}>
        <h1
          className="display-1"
          style={{ marginBottom: "40px", color: "white" }}
        >
          Task ToDo
        </h1>
        <Col md={{ span: "4", offset: "4" }}>
          <InputGroup className="mb-3" >
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter To-Do"
              onChange={(e) => this.setState({ input: e.target.value })}
              value={this.state.input}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{ backgroundColor: "orange" }}
              onClick={() => this.addOrUpdateTodo()}
            >
              {isEditing ? <FiEdit /> : <MdOutlineAddBox />}
            </Button>
          </InputGroup>

          {/* ----------------------- map -----------------------*/}
          <ListGroup>
            {todoList.map((todo, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col className="todo" md={8}>
                    <h3>{todo}</h3>
                  </Col>
                  <Col className="action" xs={1} md={4}>
                    <Button
                      className="action-btn"
                      variant="primary"
                      onClick={() => this.editTodo(index)}
                    >
                      <FiEdit />
                    </Button>
                    <Button
                      className="action-btn"
                      variant="danger"
                      onClick={() => this.deleteTodo(index)}
                    >
                      <MdDeleteOutline />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default ToDo;
