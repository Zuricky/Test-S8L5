const TvShows = () => {
  return (
    <div className="d-flex align-items-center ps-3 ms-3 mt-4">
      <h2 className="text-light">TV Shows</h2>

      <div className="dropdown">
        <button className="btn ms-5 dropdown-toggle btn-outline-secondary text-light bg-black rounded-0" type="button" data-bs-toggle="dropdown">
          Genres
        </button>
        <ul className="dropdown-menu dropdown-menu bg-black">
          <li>
            <a className="dropdown-item text-light" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Comedy
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Drama
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Sci-Fi
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Fantasy
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Romantic
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Drammatic
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Crime
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Thriller
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Horror
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TvShows;
