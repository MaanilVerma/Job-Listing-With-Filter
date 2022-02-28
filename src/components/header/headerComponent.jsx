import React, { useRef, useContext } from "react";

import "./headerStyles.scss";

import headerBackground from "../../assets/images/bg-header-desktop.svg";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Header(props) {
  const searchBtn = useRef(null);

  const { searchTags, setSearchTags } = useContext(SearchTagsContext);

  const addItem = (e) => {
    e.preventDefault();
    const item = e.target.newTag.value;

    if (item && !searchTags.includes(item))
      setSearchTags([...searchTags, item]);

    searchBtn.current.blur(); //overriding button active state styling
    e.target.reset();
    searchBtn.current.classList.remove("active");
  };

  const toggleBtn = (e) => {
    const query = e.target.value;

    if (query !== "") {
      searchBtn.current.classList.add("active");
    } else {
      searchBtn.current.classList.remove("active");
    }
  };

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <Container className="page-container header-container">
        <Row>
          <Col>
            <Form onSubmit={(e) => addItem(e)}>
              <Form.Control
                name="newTag"
                onChange={(e) => toggleBtn(e)}
                className="searchbar"
                type="text"
                placeholder="Search"
              />

              <Button ref={searchBtn} type="submit" className="search-btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
