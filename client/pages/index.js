const LandingPage = ({ color }) => {
  console.log('I am in the component', color);
  return <h1>Landing Page!</h1>;
};

LandingPage.getInitialProps = () => {
  console.log('I am in getInitialProps on the server');
  return { color: 'pink' };
};

export default LandingPage;
