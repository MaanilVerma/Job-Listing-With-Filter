import React, {useContext} from "react";

import "./listingStyles.scss";

import { Row, Col } from "react-bootstrap";

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Listing(props) {
  
  const { setSearchTags } = useContext(SearchTagsContext);

  let {
    company,
    logo,
    featured,
    position,
    postedAt,
    type,
    location,
    tags
  } = props.item;
  let isNew = props.item.new;

  let logoName = logo.split("/").pop();

  const handleTagClick = (e) => {
    setSearchTags((prev) => {
      if (prev.includes(e.target.innerText)) return prev
      return prev.concat(e.target.innerText)
    });
}; 

  return (
    <div className="listing-box">
      <Row>
        <Col className="thumpnail-col" md={2}>
          <div
            className="thumpnail"
            style={{ backgroundImage: `url(/images/companies/${logoName})` }}
          />
        </Col>
        <Col className="info-col-parent">
          <Row>
            <Col className="info-col" md={6}>
              <span className="company-name">{company}</span>

              {isNew ? <span className="company-tag new ">New!</span> : null}
              {featured ? (
                <span className="company-tag featured">FEATURED</span>
              ) : null}

              <span className="post-title">{position}</span>

              <ul className="info-list">
                <li>{postedAt}</li>
                <li>{type}</li>
                <li>{location}</li>
              </ul>
            </Col>
            <Col className="job-tags-col" md={6}>
              <ul className="tag-list">
                {tags.map((tag, key) => (
                  <li key={tag} onClick={handleTagClick}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Listing;
