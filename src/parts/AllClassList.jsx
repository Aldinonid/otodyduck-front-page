import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

import ClassCard from "elements/ClassCard";

import { Link } from "react-router-dom";
import "assets/scss/style.scss";
import NotFound from "assets/images/image-not-found.jpg";
import { axios } from "configs/axios";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

export default function AllClassList({ data }) {
  const [Course, setCourse] = useState(data);
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
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      });
      axios
        .get(`${process.env.REACT_APP_API_HOST}/courses`, {
          params: { status: "published", q: e.target.value },
        })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) =>
          setSearchResponse({ isLoading: false, isError: true, data: null })
        );
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const allFilter = () => {
    setCourse(data);
  };

  const categoryFilter = (filter) => {
    const filterData = data.filter((cat) => cat.category === filter);
    setCourse(filterData);
  };

  console.log(Course);

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
            <div class="form-group has-search" ref={selectWrapper}>
              <span class="fa fa-search form-control-feedback"></span>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                class="form-control"
                placeholder={
                  SearchFocus
                    ? "Type minimum 3 word to search class"
                    : "Looking for a class ?"
                }
              />
              {Search.length >= 3 && (
                <div className="d-flex flex-column border border-gray">
                  {SearchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {SearchResponse.isError && "Something wrong"}
                      {SearchResponse?.data?.map((item, index) => {
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
                                  item?.mentor_id?.name
                                )}` ?? "Class By Mentor Name"}{" "}
                              </p>
                              <Link
                                to={`/class/${item?.slug}`}
                                className="stretched-link"
                              ></Link>
                            </div>
                          </div>
                        );
                      }) || "No Course Found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
      <div className="container-grid mb-5 list-course-all">
        {Course?.map((item, index) => {
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
                  teacherImg={item.mentor_id?.avatar || NotFound}
                  teacherName={item.mentor_id?.name}
                  teacherJob={item.mentor_id?.job}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
