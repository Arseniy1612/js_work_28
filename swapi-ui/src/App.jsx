import React from "react";

export default function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            alt="SW"
            style={{ width: 56, height: 28, objectFit: "contain" }}
          />
          <div>
            <h1 className="h4 mb-0">SWAPI — Інтерфейс</h1>
            <small className="text-muted">
              Тільки UI (без запитів і подій)
            </small>
          </div>
        </div>
        <div className="mt-3 mt-md-0 w-100 w-md-auto">
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Пошук (наприклад: Людей, Планет)"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit" disabled>
              Пошук
            </button>
          </form>
        </div>
      </header>

      <section className="mb-4">
        <div className="card">
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-12 col-md-6">
                <label className="form-label mb-1">Ресурс</label>
                <select className="form-select" aria-label="resource-select" disabled>
                  <option>People</option>
                  <option>Films</option>
                  <option>Starships</option>
                  <option>Vehicles</option>
                  <option>Species</option>
                  <option>Planets</option>
                </select>
                <div className="form-text">
                  Виберіть ресурс — селект тільки для UI.
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label mb-1">Фільтри</label>
                <div className="d-flex gap-2 flex-wrap">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Filter: name"
                    disabled
                  />
                  <input
                    className="form-control form-control-sm"
                    placeholder="Filter: year/rotation"
                    disabled
                  />
                  <button className="btn btn-outline-secondary btn-sm" disabled>
                    Додати фільтр
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h5 mb-3">Результати</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="col" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://via.placeholder.com/600x240?text=Item+${i + 1}`}
                  className="card-img-top"
                  alt={`placeholder-${i}`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Назва {i + 1}</h5>
                  <p className="card-text text-muted small mb-2">
                    Короткий опис об'єкта — тут будуть дані з API.
                  </p>

                  <ul className="list-unstyled small mb-3">
                    <li>
                      <strong>Властивість A:</strong> —
                    </li>
                    <li>
                      <strong>Властивість B:</strong> —
                    </li>
                    <li>
                      <strong>Властивість C:</strong> —
                    </li>
                  </ul>

                  <div className="mt-auto d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary" disabled>
                      Деталі
                    </button>
                    <button className="btn btn-sm btn-outline-secondary" disabled>
                      Додати в обране
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav className="mt-4" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Попередня
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Наступна
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <footer className="mt-5 text-center text-muted small">
        UI-only demo for SWAPI — без логіки запитів.
      </footer>
    </div>
  );
}
