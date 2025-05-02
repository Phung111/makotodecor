const LandingPage = () => {
  return (
    <>
      <img
        src={require('assets/images/landing-page-web.png')}
        alt=""
        className="hidden sm:block"
      />

      <img
        src={require('assets/images/landing-page-mobile.png')}
        alt=""
        className="block sm:hidden"
      />
    </>
  );
};

export default LandingPage;
