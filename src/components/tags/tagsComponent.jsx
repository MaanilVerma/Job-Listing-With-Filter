import React, { useContext } from "react";

import { ReactComponent as Icon } from "../../assets/images/icon-remove.svg";
import "./tagsStyles.scss";

import { Row, Col } from "react-bootstrap";

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Tags(props) {
  const { searchTags, setSearchTags } = useContext(SearchTagsContext);

  const handleDelete = (item) => {
    setSearchTags(searchTags.filter((li) => li !== item));
  };

  const clearAllTags = () => {
    setSearchTags([]);
  };

  return (
    <div className="tags-box">
      <Row>
        <Col className="tags-col">
          {searchTags.map((tag, key) => (
            <span key={key} className="tag">
              {tag}
              <span onClick={() => handleDelete(tag)} className="tag-close">
                <Icon className="cross" />
              </span>
            </span>
          ))}

          {searchTags.length > 1 ? (
            <span onClick={() => clearAllTags()} className="clr-link">
              Clear all
            </span>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Tags;
