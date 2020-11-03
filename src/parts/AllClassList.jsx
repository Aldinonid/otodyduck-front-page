import React from "react";
import Fade from "react-reveal/Fade";

import ClassCard from "elements/ClassCard";

import "assets/scss/style.scss";
import NotFound from "assets/images/image-not-found.jpg";

export default function AllClassList({ data }) {
  // const [Search, setSearch] = useState(() => "");
  // const [SearchFocus, setSearchFocus] = useState(() => false);
  // const [SearchResponse, setSearchResponse] = useState(() => ({
  //   isLoading: false,
  //   isError: false,
  //   data: [],
  // }));

  // const selectWrapper = useRef(null);

  // function clickOutside(event) {
  //   if (selectWrapper && selectWrapper.current.contains(event.target)) {
  //     setSearch("");
  //   }
  // }

  // let timeoutSearch = useRef(null);
  // function handleSearch(event) {
  //   event.persist();
  //   setSearch(event.target.value);
  //   clearTimeout(timeoutSearch.current);
  //   timeoutSearch.current = setTimeout(() => {
  //     setSearchResponse({
  //       isLoading: true,
  //       isError: false,
  //       data: null,
  //     });
  //     courses
  //       .all({ params: { q: event.target.value } })
  //       .then((res) => {
  //         setSearchResponse({
  //           isLoading: false,
  //           isError: false,
  //           data: res.data,
  //         });
  //       })
  //       .catch((err) => {
  //         setSearchResponse({
  //           isLoading: false,
  //           isError: true,
  //           data: null,
  //         });
  //       });
  //   }, 1000);
  // }

  // useEffect(() => {
  //   window.addEventListener("mousedown", clickOutside);
  //   return () => {
  //     window.addEventListener("mousedown", clickOutside);
  //   };
  // }, []);

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
        <div className="row justify-content-md-center mb-5">
          <div className="col-8">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                id="q"
                type="text"
                // onChange={handleSearch}
                // onFocus={() => setSearchFocus(!SearchFocus)}
                // onBlur={() => setSearchFocus(!SearchFocus)}
                // value={Search}
                // class="form-control"
                // placeholder={
                //   SearchFocus
                //     ? "Type minimum 3 word to search class"
                //     : "Looking for a class ?"
                // }
              />
              {/* {Search.length >= 3 && (
                <div className="flex flex-col" style={{ top: 75 }}></div>
              )} */}
            </div>
          </div>
        </div>
      </Fade>
      <div className="container-grid mb-5">
        {data?.map((item, index) => {
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
