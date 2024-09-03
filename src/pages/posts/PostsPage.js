import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularProfiles from "../profiles/PopularProfiles";
import axios from "axios";
import ArtCategories from "../../components/ArtCategories";

function PostsPage({ message, filter = "", selectedCategory = "" }) {

  const [posts, setPosts] = useState({ results: [] });
  const [hasloaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // the request string will contain filter parameter, which comes from the filter prop we set in routes.
        // tells API if we want to see all posts or certain ones.
        if (currentUser == null) {
          const { data } = await axios.get(`/posts/?${filter}`);
          setPosts(data);
        } else {
          const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
          setPosts(data);
        }
        // setting IsLoaded to true so spinner no longer spins.
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />  

        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasloaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className="mt-4">
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles /> 
        
        <ArtCategories selectedCategory={selectedCategory} />
      </Col>
      
       
     
    </Row>
  );
}

export default PostsPage;


