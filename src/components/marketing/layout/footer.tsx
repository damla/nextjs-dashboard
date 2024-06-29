export const Footer = () => {
  return (
    <footer>
      <hr className="mx-auto w-11/12" />
      <section className="container pb-14 pt-4 text-center">
        <h3>
          &copy; 2024 Dashboard application made by{' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/damla"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            Damla Köksal
          </a>
        </h3>
      </section>
    </footer>
  );
};
