import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

import ClassCard from "elements/ClassCard";

import { Link } from "react-router-dom";
import "assets/scss/style.scss";
import NotFound from "assets/images/no-user.png";
import { axios } from "configs/axios";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

export default function AllClassList({ data }) {
  const [courses, setCourses] = useState();
  const [Search, setSearch] = useState(() => "");
  const [SearchFocus, setSearchFocus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current?.contains(event.target)) {
      setSearch("");
    }
  }

  let timeoutSearch = useRef(null);
  function handleSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeoutSearch.current);
    setSearchResponse({
      isLoading: true,
      isError: false,
      data: [],
    });
    timeoutSearch.current = setTimeout(() => {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/course`, {
          params: { status: "published", q: e.target.value },
        })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data.data,
          });
        })
        .catch((err) =>
          setSearchResponse({ isLoading: false, isError: true, data: [] })
        );
    }, 1000);
  }

  useEffect(() => {
    setCourses(data);
  }, [data]);

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const allFilter = () => {
    setCourses(data);
  };

  const categoryFilter = (filter) => {
    const filterData = data.filter((cat) => cat.category === filter);
    setCourses(filterData);
  };

  return (
    <section className="container">
      <Fade bottom>
        <div className="text-center">
          <h1 className="medium">All Class</h1>
          <h5 className="text-gray-500">
            Don’t lose update with others.
            <br />
            Let's follow the development of technology.
          </h5>
        </div>
        <div className="d-flex justify-content-center mb-5 mt-5">
          <h5 className="font-weight-light mr-4 align-middle pt-1">
            By Category:{" "}
          </h5>
          <button
            className="btn btn-primary mr-3 text-uppercase text-light medium"
            onClick={allFilter}
          >
            ALl
          </button>
          <button
            className="btn btn-primary mr-3 text-uppercase text-light medium"
            onClick={() => categoryFilter("design")}
          >
            Design
          </button>
          <button
            className="btn btn-primary mr-3 text-uppercase text-light medium"
            onClick={() => categoryFilter("development")}
          >
            Development
          </button>
          <button
            className="btn btn-primary text-uppercase text-light medium"
            onClick={() => categoryFilter("soft skill")}
          >
            Soft Skill
          </button>
        </div>
        <div className="row justify-content-md-center mb-5">
          <div className="col-8">
            <div className="form-group has-search" ref={selectWrapper}>
              <span className="fa fa-search form-control-feedback"></span>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                className="form-control"
                placeholder={
                  SearchFocus
                    ? "Type minimum 3 word to search class"
                    : "Looking for a class ?"
                }
              />
              {Search.length >= 3 && (
                <div className="d-flex flex-column border border-gray">
                  {SearchResponse.isLoading ? (
                    <div className="text-center h5 py-2">
                      Loading...
                    </div>
                  ) : (
                    <>
                      {SearchResponse.isError && "Something wrong"}
                      {SearchResponse.data.length > 0 ? SearchResponse.data.map((item, index) => {
                        return (
                          <div
                            className="d-flex align-items-center -mx-4 py-2 search-relative"
                            key={index}
                          >
                            <div className="w-auto px-4">
                              <img
                                src={item?.thumbnail ?? ""}
                                alt={item?.name ?? "Course Name"}
                                height="100"
                                width="150"
                                className="rounded"
                              />
                            </div>
                            <div className="w-full px-4">
                              <h4 className="medium">
                                {item?.name ?? "Course Name"}
                              </h4>
                              <p className="text-dark">
                                {`Class By ${capitalizeFirstLetter(
                                  item?.user?.name
                                )}` ?? "Class By Mentor Name"}{" "}
                              </p>
                              <Link
                                to={`/class/${item?.slug}`}
                                className="stretched-link"
                              ></Link>
                            </div>
                          </div>
                        );
                      }) : (
                        <div className="text-center h5 py-2">
                          No Course Found
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
      {courses?.length === 0 && (
        <div className="text-center">
          <h1 className="medium">No Classes</h1>
        </div>
      )}
      <div className="container-grid mb-5 list-course-all">
        {courses?.map((item, index) => {
          return (
            <div className="item column-4" key={index}>
              <Fade bottom delay={100 * index}>
                <ClassCard
                  item_id={item.id}
                  slug={item.slug}
                  imageUrl={item.thumbnail || NotFound}
                  name={item.name}
                  type={item.type.toUpperCase()}
                  price={item.price}
                  teacherImg={item.user?.avatar || NotFound}
                  teacherName={item.user?.name}
                  teacherJob={item.user?.job}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
