import React from "react";

const NewsItem =(props)=> {

    let { title, description, imagUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="container my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              postion: "aboslute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imagUrl
                ? "https://dims.apnews.com/dims4/default/15c6fbd/2147483647/strip/true/crop/5405x3040+0+281/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F49%2Fb0%2Fa79821be4fcefe47650e08ee1a42%2Fcae2e3d8cdb24a3dbf6169e3e5b25c5b"
                : imagUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Uknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
