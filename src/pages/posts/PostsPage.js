import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import PopularProfiles from "../profiles/PopularProfiles";
import ArtCategories from "../categories/ArtCategories";


function PostsPage({ message, filter = "", selectedCategory = ""  }) {

  const [posts, setPosts] = useState({ results: [] });
  const [hasloaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
                setPosts(data)
                setHasLoaded(true)
            } catch (err) {
                // console.log(err)
            };
        };
        setHasLoaded(false)
        // timer to reduce amount of API requests in searchbar - waits 1 sec before making request
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000)
        return () => {
            clearTimeout(timer)
        };

    },[filter, query, pathname])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        

        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search art"
          />
        </Form>
        <PopularProfiles mobile />   
        <ArtCategories selectedCategory={selectedCategory} mobile />

        {hasloaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children = {
                  posts.results.map((post) => (
                    <Post
                      key={post.id} 
                      {...post} 
                      setPosts={setPosts} 
                    />
                  ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
              ):
                <Container>
                  <Asset src={NoResults} message={message} />
                </Container>
            }
          </>
        ):(
          <Container mt-4>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col  md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles /> 
        <ArtCategories selectedCategory={selectedCategory} />
      </Col>
    </Row>
  );
};

export default PostsPage;


